"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function SettingsPage() {
  // Sample team members data
  const [teamMembers, setTeamMembers] = useState([
    { 
      id: 1, 
      name: "Aryan Sharma", 
      email: "aryan@example.com", 
      role: "Admin",
      access: {
        claims: true,
        workshops: true,
        reports: true,
        settings: true
      }
    },
    { 
      id: 2, 
      name: "Priya Patel", 
      email: "priya@example.com", 
      role: "Manager",
      access: {
        claims: true,
        workshops: true,
        reports: true,
        settings: false
      }
    },
    { 
      id: 3, 
      name: "Rajesh Kumar", 
      email: "rajesh@example.com", 
      role: "Agent",
      access: {
        claims: true,
        workshops: false,
        reports: false,
        settings: false
      }
    },
    { 
      id: 4, 
      name: "Ananya Singh", 
      email: "ananya@example.com", 
      role: "Agent",
      access: {
        claims: true,
        workshops: true,
        reports: false,
        settings: false
      }
    }
  ]);

  // Function to toggle access for a team member
  const toggleAccess = (memberId: number, accessType: string) => {
    setTeamMembers(teamMembers.map(member => {
      if (member.id === memberId) {
        return {
          ...member,
          access: {
            ...member.access,
            [accessType]: !member.access[accessType as keyof typeof member.access]
          }
        };
      }
      return member;
    }));
  };

  // Function to change role for a team member
  const changeRole = (memberId: number, newRole: string) => {
    setTeamMembers(teamMembers.map(member => {
      if (member.id === memberId) {
        return {
          ...member,
          role: newRole
        };
      }
      return member;
    }));
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-500">Manage your account settings</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="team">Team Access</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Manan Bagga" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="manan@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Admin" disabled />
              </div>

              <Button>Save Changes</Button>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Team Members</h2>
                <Button>Add Team Member</Button>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Claims</TableHead>
                      <TableHead>Workshops</TableHead>
                      <TableHead>Reports</TableHead>
                      <TableHead>Settings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>
                          <Select 
                            defaultValue={member.role}
                            onValueChange={(value) => changeRole(member.id, value)}
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Admin">Admin</SelectItem>
                              <SelectItem value="Manager">Manager</SelectItem>
                              <SelectItem value="Agent">Agent</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Switch 
                            checked={member.access.claims}
                            onCheckedChange={() => toggleAccess(member.id, 'claims')}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch 
                            checked={member.access.workshops}
                            onCheckedChange={() => toggleAccess(member.id, 'workshops')}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch 
                            checked={member.access.reports}
                            onCheckedChange={() => toggleAccess(member.id, 'reports')}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch 
                            checked={member.access.settings}
                            onCheckedChange={() => toggleAccess(member.id, 'settings')}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>* Admin: Full access to all modules</p>
                <p>* Manager: Limited settings access</p>
                <p>* Agent: Limited access based on permissions</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive email updates about your account</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">New Claims</h3>
                  <p className="text-sm text-gray-500">Get notified when a new claim is added</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Status Updates</h3>
                  <p className="text-sm text-gray-500">Receive updates when claim status changes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>

              <Button>Update Password</Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}