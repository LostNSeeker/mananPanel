"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const claims = [
  {
    insuredName: "Jane Cooper",
    vehicleNo: "MH01AB1234",
    insurer: "HDFC Ergo",
    workshop: "AutoCare",
    dateOfDeputation: "12 Mar 2023",
    status: "Report Submitted"
  },
  // Add more claims data here
];

export default function ClaimsPage() {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Claims</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Claim
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Input 
          placeholder="Search claims..." 
          className="max-w-sm"
        />
        <Button variant="outline">Filter</Button>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Insured Name</TableHead>
              <TableHead>Vehicle No</TableHead>
              <TableHead>Insurer</TableHead>
              <TableHead>Workshop</TableHead>
              <TableHead>Date of Deputation</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {claims.map((claim) => (
              <TableRow key={claim.vehicleNo}>
                <TableCell>{claim.insuredName}</TableCell>
                <TableCell>{claim.vehicleNo}</TableCell>
                <TableCell>{claim.insurer}</TableCell>
                <TableCell>{claim.workshop}</TableCell>
                <TableCell>{claim.dateOfDeputation}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {claim.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Claim Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Add New Claim</DialogTitle>
            <DialogDescription>
              Enter the claim details below
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="insuredName">Insured Name</Label>
                <Input id="insuredName" placeholder="Enter insured name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicleNo">Vehicle Number</Label>
                <Input id="vehicleNo" placeholder="Enter vehicle number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurer">Insurer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hdfc">HDFC Ergo</SelectItem>
                    <SelectItem value="icici">ICICI Lombard</SelectItem>
                    <SelectItem value="bajaj">Bajaj Allianz</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workshop">Workshop</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select workshop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="autocare">AutoCare</SelectItem>
                    <SelectItem value="speedfix">SpeedFix</SelectItem>
                    <SelectItem value="cardoctor">CarDoctor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="claimAmount">Claim Amount</Label>
                <Input id="claimAmount" type="number" placeholder="Enter claim amount" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfIncident">Date of Incident</Label>
                <Input id="dateOfIncident" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter claim description" className="h-24" />
            </div>
          </form>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              // Here you would handle form submission
              setIsModalOpen(false);
            }}>
              Submit Claim
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}