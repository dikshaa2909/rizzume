"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"

export default function ExperienceForm({ data, onChange }) {
  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    onChange([...data, newExperience])
  }

  const updateExperience = (id, field, value) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Work Experience</h3>
        <Button onClick={addExperience} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {data.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">
              No work experience added yet. Click "Add Experience" to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        data.map((experience) => (
          <Card key={experience.id}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Work Experience</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(experience.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Job Title *</Label>
                  <Input
                    value={experience.jobTitle}
                    onChange={(e) => updateExperience(experience.id, "jobTitle", e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <Label>Company *</Label>
                  <Input
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                    placeholder="Tech Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Location</Label>
                  <Input
                    value={experience.location}
                    onChange={(e) => updateExperience(experience.id, "location", e.target.value)}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div>
                  <Label>Start Date *</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                    disabled={experience.current}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`current-${experience.id}`}
                  checked={experience.current}
                  onCheckedChange={(checked) => updateExperience(experience.id, "current", checked)}
                />
                <Label htmlFor={`current-${experience.id}`}>I currently work here</Label>
              </div>

              <div>
                <Label>Job Description</Label>
                <Textarea
                  value={experience.description}
                  onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                  placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Improved application performance by 30% through code optimization"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
