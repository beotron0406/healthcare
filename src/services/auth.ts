import { apiService } from './api';
import { 
  LoginRequest, 
  LoginResponse, 
  User, 
  CreateUserRequest,
  API_ENDPOINTS,
  STORAGE_KEYS 
} from '@/constants';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiService.post<LoginResponse>(
      'IDENTITY',
      API_ENDPOINTS.IDENTITY.LOGIN, 
      credentials
    );
    return response.data;
  },

  async register(userData: CreateUserRequest): Promise<User> {
    const response = await apiService.post<User>(
      'IDENTITY',
      API_ENDPOINTS.IDENTITY.REGISTER, 
      userData
    );
    return response.data;
  },

  async getAllUsers(): Promise<User[]> {
    const response = await apiService.get<User[]>('IDENTITY', API_ENDPOINTS.IDENTITY.USERS);
    return response.data;
  },

  async getUserById(id: string): Promise<User> {
    const response = await apiService.get<User>(
      'IDENTITY',
      API_ENDPOINTS.IDENTITY.USER_BY_ID(id)
    );
    return response.data;
  },

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const response = await apiService.patch<User>(
      'IDENTITY',
      API_ENDPOINTS.IDENTITY.USER_BY_ID(id),
      userData
    );
    return response.data;
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    window.location.href = '/login';
  },

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  },

  setToken(token: string) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  },

  setUserData(user: User) {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
  },

  getUserData(): User | null {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }
};