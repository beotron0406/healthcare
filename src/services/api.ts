import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, STORAGE_KEYS, HTTP_STATUS, API_BASE_URLS } from '@/constants';

class ApiService {
  private instances: Record<string, AxiosInstance> = {};

  constructor() {
    this.createInstances();
  }

  private createInstances() {
    // Create axios instance for each service
    Object.entries(API_BASE_URLS).forEach(([serviceName, baseURL]) => {
      this.instances[serviceName] = axios.create({
        baseURL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      this.setupInterceptors(this.instances[serviceName]);
    });
  }

  private setupInterceptors(instance: AxiosInstance) {
    // Request interceptor
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
          localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Get axios instance for specific service
  private getInstance(service: keyof typeof API_BASE_URLS): AxiosInstance {
    return this.instances[service];
  }

  async get<T>(service: keyof typeof API_BASE_URLS, url: string, params?: any): Promise<ApiResponse<T>> {
    const instance = this.getInstance(service);
    const response = await instance.get(url, { params });
    return response.data;
  }

  async post<T>(service: keyof typeof API_BASE_URLS, url: string, data?: any): Promise<ApiResponse<T>> {
    const instance = this.getInstance(service);
    const response = await instance.post(url, data);
    return response.data;
  }

  async put<T>(service: keyof typeof API_BASE_URLS, url: string, data?: any): Promise<ApiResponse<T>> {
    const instance = this.getInstance(service);
    const response = await instance.put(url, data);
    return response.data;
  }

  async patch<T>(service: keyof typeof API_BASE_URLS, url: string, data?: any): Promise<ApiResponse<T>> {
    const instance = this.getInstance(service);
    const response = await instance.patch(url, data);
    return response.data;
  }

  async delete<T>(service: keyof typeof API_BASE_URLS, url: string): Promise<ApiResponse<T>> {
    const instance = this.getInstance(service);
    const response = await instance.delete(url);
    return response.data;
  }
}

export const apiService = new ApiService();