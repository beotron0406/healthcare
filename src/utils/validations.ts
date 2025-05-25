import { VALIDATION } from '@/constants';

export const validations = {
  email: (email: string): boolean => {
    return VALIDATION.EMAIL_PATTERN.test(email);
  },

  password: (password: string): boolean => {
    return password.length >= VALIDATION.PASSWORD_MIN_LENGTH;
  },

  username: (username: string): boolean => {
    return username.length >= VALIDATION.USERNAME_MIN_LENGTH;
  },

  phone: (phone: string): boolean => {
    return VALIDATION.PHONE_PATTERN.test(phone);
  },

  required: (value: string): boolean => {
    return value.trim().length > 0;
  }
};

export const validateForm = <T extends Record<string, any>>(
  data: T,
  rules: Record<keyof T, (value: any) => boolean>
): Record<keyof T, string> => {
  const errors = {} as Record<keyof T, string>;

  Object.keys(rules).forEach((key) => {
    const field = key as keyof T;
    const rule = rules[field];
    
    if (!rule(data[field])) {
      errors[field] = `Invalid ${String(field)}`;
    }
  });

  return errors;
};