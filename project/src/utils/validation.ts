export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  website?: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const validateContactForm = (data: ContactFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (data.name && data.name.length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.email && data.email.length > 255) {
    errors.email = 'Email must be less than 255 characters';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  if (data.message && data.message.length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }

  return errors;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};
