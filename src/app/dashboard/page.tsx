'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

export default function DashboardPage() {
  const stats = [
    { name: 'Total Patients', value: '1,234', color: 'bg-blue-500' },
    { name: 'Today\'s Appointments', value: '23', color: 'bg-green-500' },
    { name: 'Pending Lab Results', value: '8', color: 'bg-yellow-500' },
    { name: 'Active Prescriptions', value: '156', color: 'bg-purple-500' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4`}>
                {stat.value.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Appointments</h3>
          <div className="space-y-3">
            {/* Appointment list will go here */}
            <p className="text-gray-500">No recent appointments</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Pending Lab Orders</h3>
          <div className="space-y-3">
            {/* Lab orders list will go here */}
            <p className="text-gray-500">No pending lab orders</p>
          </div>
        </Card>
      </div>
    </div>
  );
}