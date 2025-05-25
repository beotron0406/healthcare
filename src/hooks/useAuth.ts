'use client';

import { useState, useEffect } from 'react';
import { User } from '@/constants';
import { authService } from '@/services/auth';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = () => {
            const token = authService.getToken();
            const userData = authService.getUserData();

            if (token && userData) {
                setUser(userData);
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (username: string, password: string) => {
        const response = await authService.login({ username, password });
        authService.setToken(response.access_token);
        authService.setUserData(response.user);
        setUser(response.user);
        return response;
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user
    };
};