import { AppointmentStatus, LabOrderStatus, LabResultStatus, PrescriptionStatus, UserType } from "./enums";

// ===== COMMON INTERFACES =====
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next?: string;
  previous?: string;
}

export interface BaseEntity {
  id: string;
  created_at: string;
  updated_at?: string;
}

// ===== AUTH & USER INTERFACES =====
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface User extends BaseEntity {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: UserType;
  is_active: boolean;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: UserType;
}

// ===== PATIENT INTERFACES =====
export interface Patient {
  user_id: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
  user?: Pick<User, 'first_name' | 'last_name' | 'email'>;
}

export interface CreatePatientRequest {
  user_id: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
}

export interface VitalSigns extends BaseEntity {
  patient_user_id: string;
  nurse_user_id: string;
  timestamp: string;
  temperature_celsius?: number;
  blood_pressure_systolic?: number;
  blood_pressure_diastolic?: number;
  heart_rate_bpm?: number;
  notes?: string;
}

// ===== DOCTOR INTERFACES =====
export interface Doctor {
  user_id: string;
  specialization: string;
  license_number: string;
  phone_number: string;
  user?: Pick<User, 'first_name' | 'last_name' | 'email'>;
}

export interface CreateDoctorRequest {
  user_id: string;
  specialization: string;
  license_number: string;
  phone_number: string;
}

// ===== PHARMACIST INTERFACES =====
export interface Pharmacist {
  user_id: string;
  pharmacy_name: string;
  pharmacy_license_number: string;
  phone_number: string;
  address: string;
}

export interface CreatePharmacistRequest {
  user_id: string;
  pharmacy_name: string;
  pharmacy_license_number: string;
  phone_number: string;
  address: string;
}

// ===== NURSE INTERFACES =====
export interface Nurse {
  user_id: string;
  employee_id: string;
  user?: Pick<User, 'first_name' | 'last_name' | 'email'>;
}

export interface CreateNurseRequest {
  user_id: string;
  employee_id: string;
}

// ===== LAB TECHNICIAN INTERFACES =====
export interface LabTechnician {
  user_id: string;
  employee_id: string;
  user?: Pick<User, 'first_name' | 'last_name' | 'email'>;
}

export interface CreateLabTechnicianRequest {
  user_id: string;
  employee_id: string;
}

// ===== ADMINISTRATOR INTERFACES =====
export interface Administrator {
  user_id: string;
  internal_admin_id: string;
  user?: Pick<User, 'first_name' | 'last_name' | 'email'>;
}

export interface CreateAdministratorRequest {
  user_id: string;
  internal_admin_id: string;
}

// ===== APPOINTMENT INTERFACES =====
export interface Appointment extends BaseEntity {
  patient_user_id: string;
  doctor_user_id: string;
  start_time: string;
  end_time: string;
  notes?: string;
  status: AppointmentStatus;
}

export interface CreateAppointmentRequest {
  patient_user_id: string;
  doctor_user_id: string;
  start_time: string;
  end_time: string;
  notes?: string;
}

export interface AppointmentFilters {
  patient_user_id?: string;
  doctor_user_id?: string;
  start_time_after?: string;
  end_time_before?: string;
  status?: AppointmentStatus;
}

// ===== PRESCRIPTION INTERFACES =====
export interface Prescription extends BaseEntity {
  patient_user_id: string;
  doctor_user_id: string;
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes?: string;
  prescription_date: string;
  status: PrescriptionStatus;
  fulfilled_by_pharmacist_user_id?: string;
  fulfilled_date?: string;
}

export interface CreatePrescriptionRequest {
  patient_user_id: string;
  doctor_user_id: string;
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes?: string;
  prescription_date: string;
}

export interface FulfillPrescriptionRequest {
  pharmacist_user_id: string;
  prescription_id: string;
}

// ===== LAB INTERFACES =====
export interface LabOrder extends BaseEntity {
  patient_user_id: string;
  doctor_user_id: string;
  test_type: string;
  order_date: string;
  status: LabOrderStatus;
  notes?: string;
}

export interface CreateLabOrderRequest {
  patient_user_id: string;
  doctor_user_id: string;
  test_type: string;
  order_date?: string;
  status?: LabOrderStatus;
  notes?: string;
}

export interface LabResult extends BaseEntity {
  lab_order_id: string;
  lab_technician_user_id: string;
  result_date: string;
  result_data: Record<string, LabTestValue>;
  status: LabResultStatus;
  notes?: string;
}

export interface LabTestValue {
  value: number | string;
  unit?: string;
  reference_range?: string;
  flag?: 'normal' | 'high' | 'low' | 'critical';
}

export interface CreateLabResultRequest {
  lab_order_id: string;
  lab_technician_user_id: string;
  result_date?: string;
  result_data: Record<string, LabTestValue>;
  status?: LabResultStatus;
  notes?: string;
}

// ===== MEDICAL RECORD INTERFACES =====
export interface MedicalReport extends BaseEntity {
  patient_user_id: string;
  doctor_user_id: string;
  report_date: string;
  title: string;
  content: string;
}

export interface CreateMedicalReportRequest {
  patient_user_id: string;
  doctor_user_id: string;
  report_date: string;
  title: string;
  content: string;
}

export interface MedicalHistory {
  patient_user_id: string;
  reports: MedicalReport[];
  prescriptions: Prescription[];
  lab_orders: LabOrder[];
  lab_results: LabResult[];
  vital_signs: VitalSigns[];
  appointments: Appointment[];
}

// ===== FORM INTERFACES =====
export interface LoginFormData {
  username: string;
  password: string;
}

export interface PatientFormData extends CreatePatientRequest {
  user: CreateUserRequest;
}

export interface DoctorFormData extends CreateDoctorRequest {
  user: CreateUserRequest;
}

export interface AppointmentFormData {
  patient_user_id: string;
  doctor_user_id: string;
  date: string;
  start_time: string;
  end_time: string;
  notes?: string;
}

export interface VitalSignsFormData {
  patient_user_id: string;
  temperature_celsius?: number;
  blood_pressure_systolic?: number;
  blood_pressure_diastolic?: number;
  heart_rate_bpm?: number;
  notes?: string;
}