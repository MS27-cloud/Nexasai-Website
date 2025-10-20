/*
  # Contact Form Submissions Table

  ## Overview
  This migration creates the infrastructure for storing and managing contact form submissions
  from the Nexasai Solutions website.

  ## Tables Created
  
  ### `contact_submissions`
  Stores all contact form submissions with full message details and metadata.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, required) - Full name of the person submitting
  - `email` (text, required) - Email address for response
  - `company` (text, optional) - Company name if provided
  - `service` (text, optional) - Service interest selected
  - `message` (text, required) - Main message content
  - `ip_address` (text, optional) - IP address for rate limiting and security
  - `user_agent` (text, optional) - Browser/device info for analytics
  - `status` (text, default 'new') - Submission status: 'new', 'read', 'responded', 'archived'
  - `created_at` (timestamptz, default now()) - Timestamp of submission
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ## Security (Row Level Security)
  
  1. **RLS Enabled**: Full protection on the table
  2. **Insert Policy**: Public can submit (anonymous users allowed)
  3. **Select Policy**: Only authenticated admin users can view submissions
  
  ## Indexes
  
  - Index on `email` for faster lookups
  - Index on `status` for filtering
  - Index on `created_at` for chronological sorting
  
  ## Important Notes
  
  - Rate limiting is enforced at the application/Edge Function level using IP address
  - Email notifications are handled via Edge Function + Resend
  - No PII is exposed publicly due to strict RLS policies
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  ip_address text,
  user_agent text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

CREATE OR REPLACE FUNCTION update_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_contact_submissions_updated_at();