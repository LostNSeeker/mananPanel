"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 24000, expenses: 18000 },
  { month: 'Feb', revenue: 22000, expenses: 16000 },
  { month: 'Mar', revenue: 25000, expenses: 19000 },
  { month: 'Apr', revenue: 18000, expenses: 14000 },
  { month: 'May', revenue: 20000, expenses: 15000 },
  { month: 'Jun', revenue: 22000, expenses: 17000 },
];

export default function IncomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Income Overview</h1>
        <p className="text-gray-500">Track your revenue and expenses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-bold">₹131,000</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
          <p className="text-2xl font-bold">₹99,000</p>
          <p className="text-sm text-red-600">+8% from last month</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Net Profit</h3>
          <p className="text-2xl font-bold">₹32,000</p>
          <p className="text-sm text-green-600">+15% from last month</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue vs Expenses</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
                <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Profit Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#10B981" 
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}