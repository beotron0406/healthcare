// Export all constants
export * from './interfaces';
export * from './enums';
export * from './api-endpoints';

// ===== APPLICATION CONSTANTS =====
export const APP_CONFIG = {
  NAME: 'Healthcare Management System',
  VERSION: '1.0.0',
  DESCRIPTION: 'Comprehensive healthcare management platform',
  AUTHOR: 'Healthcare Team'
} as const;

// ===== PAGINATION DEFAULTS =====
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1
} as const;

// ===== DATE/TIME FORMATS =====
export const DATE_FORMATS = {
  DISPLAY: 'dd/MM/yyyy',
  API: 'yyyy-MM-dd',
  DATETIME_DISPLAY: 'dd/MM/yyyy HH:mm',
  DATETIME_API: "yyyy-MM-dd'T'HH:mm:ss'Z'"
} as const;

// ===== VALIDATION RULES =====
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_PATTERN: /^[0-9\-\+\s\(\)]+$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const;

// ===== UI CONSTANTS =====
export const UI = {
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 200
} as const;

// ===== VITAL SIGNS RANGES =====
export const VITAL_RANGES = {
  TEMPERATURE: {
    NORMAL_MIN: 36.1,
    NORMAL_MAX: 37.2,
    UNIT: '°C'
  },
  BLOOD_PRESSURE: {
    SYSTOLIC: {
      NORMAL_MIN: 90,
      NORMAL_MAX: 120
    },
    DIASTOLIC: {
      NORMAL_MIN: 60,
      NORMAL_MAX: 80
    },
    UNIT: 'mmHg'
  },
  HEART_RATE: {
    NORMAL_MIN: 60,
    NORMAL_MAX: 100,
    UNIT: 'bpm'
  }
} as const;