// ===== USER TYPES =====
export enum UserType {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  PHARMACIST = 'pharmacist',
  NURSE = 'nurse',
  LAB_TECHNICIAN = 'lab_technician',
  ADMINISTRATOR = 'administrator'
}

// ===== APPOINTMENT STATUS =====
export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show'
}

// ===== PRESCRIPTION STATUS =====
export enum PrescriptionStatus {
  ACTIVE = 'active',
  FILLED = 'filled',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired'
}

// ===== LAB ORDER STATUS =====
export enum LabOrderStatus {
  ORDERED = 'ordered',
  SAMPLE_COLLECTED = 'sample_collected',
  TESTING_IN_PROGRESS = 'testing_in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

// ===== LAB RESULT STATUS =====
export enum LabResultStatus {
  PRELIMINARY = 'preliminary',
  FINAL = 'final',
  CORRECTED = 'corrected'
}

// ===== VITAL SIGNS FLAGS =====
export enum VitalFlag {
  NORMAL = 'normal',
  HIGH = 'high',
  LOW = 'low',
  CRITICAL = 'critical'
}

// ===== NAVIGATION ROUTES =====
export enum Routes {
  HOME = '/',
  LOGIN = '/login',
  DASHBOARD = '/dashboard',
  PATIENTS = '/patients',
  DOCTORS = '/doctors',
  APPOINTMENTS = '/appointments',
  PRESCRIPTIONS = '/prescriptions',
  LAB_ORDERS = '/lab-orders',
  MEDICAL_RECORDS = '/medical-records',
  ADMIN = '/admin'
}

// ===== API METHODS =====
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

// ===== NOTIFICATION TYPES =====
export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}