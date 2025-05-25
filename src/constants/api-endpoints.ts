// ===== BASE URLS FROM ENVIRONMENT =====
const getBaseUrl = (envVar: string, fallback: string): string => {
  return process.env[envVar] || fallback;
};

export const API_BASE_URLS = {
  IDENTITY: getBaseUrl('NEXT_PUBLIC_IDENTITY_API_URL', 'http://localhost:8000'),
  PATIENT: getBaseUrl('NEXT_PUBLIC_PATIENT_API_URL', 'http://localhost:8001'),
  DOCTOR: getBaseUrl('NEXT_PUBLIC_DOCTOR_API_URL', 'http://localhost:8002'),
  PHARMACIST: getBaseUrl('NEXT_PUBLIC_PHARMACIST_API_URL', 'http://localhost:8003'),
  APPOINTMENT: getBaseUrl('NEXT_PUBLIC_APPOINTMENT_API_URL', 'http://localhost:8004'),
  NURSE: getBaseUrl('NEXT_PUBLIC_NURSE_API_URL', 'http://localhost:8005'),
  LAB: getBaseUrl('NEXT_PUBLIC_LAB_API_URL', 'http://localhost:8006'),
  MEDICAL_RECORD: getBaseUrl('NEXT_PUBLIC_MEDICAL_RECORD_API_URL', 'http://localhost:8007'),
  PRESCRIPTION: getBaseUrl('NEXT_PUBLIC_PRESCRIPTION_API_URL', 'http://localhost:8008'),
  ADMIN: getBaseUrl('NEXT_PUBLIC_ADMIN_API_URL', 'http://localhost:8009')
} as const;

// ===== API ENDPOINTS =====
export const API_ENDPOINTS = {
  // Identity Service
  IDENTITY: {
    REGISTER: '/api/identity/register/',
    LOGIN: '/api/identity/login/',
    USERS: '/api/identity/users/',
    USER_BY_ID: (id: string) => `/api/identity/users/${id}/`
  },

  // Patient Service
  PATIENT: {
    LIST: '/api/patients/',
    BY_ID: (id: string) => `/api/patients/${id}/`,
    CREATE: '/api/patients/'
  },

  // Doctor Service
  DOCTOR: {
    LIST: '/api/doctors/',
    BY_ID: (id: string) => `/api/doctors/${id}/`,
    CREATE: '/api/doctors/'
  },

  // Pharmacist Service
  PHARMACIST: {
    LIST: '/api/pharmacists/',
    BY_ID: (id: string) => `/api/pharmacists/${id}/`,
    CREATE: '/api/pharmacists/',
    FULFILL: '/api/pharmacists/fulfill/'
  },

  // Nurse Service
  NURSE: {
    LIST: '/api/nurses/',
    BY_ID: (id: string) => `/api/nurses/${id}/`,
    CREATE: '/api/nurses/',
    VITALS: '/api/vitals/',
    VITAL_BY_ID: (id: string) => `/api/vitals/${id}/`
  },

  // Lab Service
  LAB: {
    TECHNICIANS: '/api/labtechs/',
    TECHNICIAN_BY_ID: (id: string) => `/api/labtechs/${id}/`,
    ORDERS: '/api/orders/',
    ORDER_BY_ID: (id: string) => `/api/orders/${id}/`,
    RESULTS: '/api/results/',
    RESULT_BY_ID: (id: string) => `/api/results/${id}/`
  },

  // Appointment Service
  APPOINTMENT: {
    LIST: '/api/appointments/',
    BY_ID: (id: string) => `/api/appointments/${id}/`,
    CREATE: '/api/appointments/'
  },

  // Prescription Service
  PRESCRIPTION: {
    LIST: '/api/prescriptions/',
    BY_ID: (id: string) => `/api/prescriptions/${id}/`,
    CREATE: '/api/prescriptions/'
  },

  // Medical Record Service
  MEDICAL_RECORD: {
    REPORTS: '/api/reports/',
    REPORT_BY_ID: (id: string) => `/api/reports/${id}/`,
    PATIENT_HISTORY: (patientId: string) => `/api/patients/${patientId}/medical_history/`
  },

  // Admin Service
  ADMIN: {
    ADMINS: '/api/admins/',
    ADMIN_BY_ID: (id: string) => `/api/admins/${id}/`,
    USERS: '/api/users/',
    USER_BY_ID: (id: string) => `/api/users/${id}/`,
    CREATE_USER: '/api/users/create/'
  }
} as const;

// ===== FULL API URLS HELPER =====
export const getFullApiUrl = (service: keyof typeof API_BASE_URLS, endpoint: string): string => {
  return `${API_BASE_URLS[service]}${endpoint}`;
};

// ===== HTTP STATUS CODES =====
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const;

// ===== LOCAL STORAGE KEYS =====
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'theme'
} as const;