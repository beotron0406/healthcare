import { apiService } from './api';
import {
    Patient,
    CreatePatientRequest,
    VitalSigns,
    API_ENDPOINTS
} from '@/constants';

class PatientsService {
    async getAll(): Promise<Patient[]> {
        const response = await apiService.get<Patient[]>(
            'PATIENT',
            API_ENDPOINTS.PATIENT.LIST
        );
        return response.data;
    }

    async getById(id: string): Promise<Patient> {
        const response = await apiService.get<Patient>(
            'PATIENT',
            API_ENDPOINTS.PATIENT.BY_ID(id)
        );
        return response.data;
    }

    async create(patientData: CreatePatientRequest): Promise<Patient> {
        const response = await apiService.post<Patient>(
            'PATIENT',
            API_ENDPOINTS.PATIENT.CREATE,
            patientData
        );
        return response.data;
    }

    async update(id: string, patientData: Partial<Patient>): Promise<Patient> {
        const response = await apiService.patch<Patient>(
            'PATIENT',
            API_ENDPOINTS.PATIENT.BY_ID(id),
            patientData
        );
        return response.data;
    }

    async delete(id: string): Promise<void> {
        await apiService.delete('PATIENT', API_ENDPOINTS.PATIENT.BY_ID(id));
    }

    // Vital Signs related methods
    async getVitalSigns(patientId?: string): Promise<VitalSigns[]> {
        const params = patientId ? { patient_user_id: patientId } : {};
        const response = await apiService.get<VitalSigns[]>(
            'NURSE',
            API_ENDPOINTS.NURSE.VITALS,
            params
        );
        return response.data;
    }

    async createVitalSigns(vitalData: Omit<VitalSigns, 'id' | 'created_at'>): Promise<VitalSigns> {
        const response = await apiService.post<VitalSigns>(
            'NURSE',
            API_ENDPOINTS.NURSE.VITALS,
            vitalData
        );
        return response.data;
    }
}

export const patientsService = new PatientsService();