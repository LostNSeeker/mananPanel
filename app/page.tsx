"use client";

import { Card } from "@/components/ui/card";
import { 
  CircleDollarSign, 
  FileText, 
  AlertTriangle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const stats = [
  {
    title: "Total Claims",
    value: "5,423",
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  {
    title: "Monthly Revenue",
    value: "₹24,357",
    icon: CircleDollarSign,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    title: "Pending Claims",
    value: "24",
    icon: AlertTriangle,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500"
  },
  {
    title: "Avg. Processing",
    value: "12 days",
    icon: Clock,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500"
  }
];

const monthlyData = [
  { month: 'Jan', revenue: 24000, claims: 110 },
  { month: 'Feb', revenue: 22000, claims: 95 },
  { month: 'Mar', revenue: 25000, claims: 108 },
  { month: 'Apr', revenue: 18000, claims: 105 },
  { month: 'May', revenue: 20000, claims: 125 },
  { month: 'Jun', revenue: 22000, claims: 135 },
];

const pieData = [
  { name: 'Completed', value: 65 },
  { name: 'Pending', value: 35 },
];

const COLORS = ['#10B981', '#EF4444'];

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Company Overview</h1>
        <p className="text-gray-500">Welcome back, Manan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className={cn("p-2 rounded-lg", stat.iconBg)}>
                <stat.icon className={cn("h-6 w-6", stat.iconColor)} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Claims</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="claims" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Claims Status</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}