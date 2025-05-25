'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button as AntButton, Alert } from 'antd';
import { authService } from '@/services/auth';
import { LoginFormData, Routes } from '@/constants';

export const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const onFinish = async (values: LoginFormData) => {
        setLoading(true);
        setError('');

        try {
            const response = await authService.login(values);
            authService.setToken(response.access_token);
            authService.setUserData(response.user);
            router.push(Routes.DASHBOARD);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            className="max-w-md w-full space-y-4"
        >
            {error && (
                <Alert message={error} type="error" showIcon className="mb-4" />
            )}

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter your username' }]}
            >
                <Input placeholder="Enter username" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
            >
                <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
                <AntButton type="primary" htmlType="submit" loading={loading} block>
                    Sign In
                </AntButton>
            </Form.Item>
        </Form>
    );
};
