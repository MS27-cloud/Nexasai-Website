import { describe, it, expect } from 'vitest';
import { validateContactForm, sanitizeInput } from '../utils/validation';

describe('Contact Form Validation', () => {
  it('validates a correct form submission', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message with enough characters.',
    };

    const errors = validateContactForm(validData);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('rejects empty name', () => {
    const invalidData = {
      name: '',
      email: 'john@example.com',
      message: 'This is a test message.',
    };

    const errors = validateContactForm(invalidData);
    expect(errors.name).toBeDefined();
  });

  it('rejects short name', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      message: 'This is a test message.',
    };

    const errors = validateContactForm(invalidData);
    expect(errors.name).toBeDefined();
  });

  it('rejects invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'This is a test message.',
    };

    const errors = validateContactForm(invalidData);
    expect(errors.email).toBeDefined();
  });

  it('rejects short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    };

    const errors = validateContactForm(invalidData);
    expect(errors.message).toBeDefined();
  });

  it('sanitizes input correctly', () => {
    expect(sanitizeInput('  test  ')).toBe('test');
    expect(sanitizeInput('test<script>alert("xss")</script>')).toBe(
      'testscriptalert("xss")/script'
    );
    expect(sanitizeInput('normal text')).toBe('normal text');
  });
});
