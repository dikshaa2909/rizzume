"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Globe, Linkedin, Atom } from "lucide-react"

export default function PersonalInfoForm({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  return (
    <div className="space-y-8">
      <Card className="border-cyan-500/30 bg-gradient-to-br from-slate-800/80 to-cyan-900/20 backdrop-blur-xl rounded-2xl border">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-cyan-400 text-2xl font-bold tracking-tight">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
              <Atom className="h-6 w-6 text-white" />
            </div>
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-base font-bold text-gray-200">
                Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="fullName"
                  value={data.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Doe"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-bold text-gray-200">
                Email *
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-bold text-gray-200">
                Phone
              </Label>
              <div className="relative">
                <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  value={data.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="location" className="text-base font-bold text-gray-200">
                Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="location"
                  value={data.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="New York, NY"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="website" className="text-base font-bold text-gray-200">
                Website
              </Label>
              <div className="relative">
                <Globe className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="website"
                  value={data.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder="https://johndoe.com"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="linkedin" className="text-base font-bold text-gray-200">
                LinkedIn
              </Label>
              <div className="relative">
                <Linkedin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="linkedin"
                  value={data.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="pl-12 bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 h-14 text-lg rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="summary" className="text-base font-bold text-gray-200">
              Professional Summary
            </Label>
            <Textarea
              id="summary"
              value={data.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
              placeholder="Write a compelling summary of your professional background and key achievements..."
              rows={5}
              className="bg-slate-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 resize-none text-lg rounded-xl p-4"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
