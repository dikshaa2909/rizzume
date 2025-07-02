"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

export default function EducationForm({ data, onChange }) {
  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      location: "",
      graduationDate: "",
      gpa: "",
    }
    onChange([...data, newEducation])
  }

  const updateEducation = (id, field, value) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const removeEducation = (id) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Education</h3>
        <Button onClick={addEducation} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {data.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">No education added yet. Click "Add Education" to get started.</p>
          </CardContent>
        </Card>
      ) : (
        data.map((education) => (
          <Card key={education.id}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Education</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Degree *</Label>
                  <Input
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <Label>School *</Label>
                  <Input
                    value={education.school}
                    onChange={(e) => updateEducation(education.id, "school", e.target.value)}
                    placeholder="University of Technology"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Location</Label>
                  <Input
                    value={education.location}
                    onChange={(e) => updateEducation(education.id, "location", e.target.value)}
                    placeholder="Boston, MA"
                  />
                </div>
                <div>
                  <Label>Graduation Date</Label>
                  <Input
                    type="month"
                    value={education.graduationDate}
                    onChange={(e) => updateEducation(education.id, "graduationDate", e.target.value)}
                  />
                </div>
                <div>
                  <Label>GPA (Optional)</Label>
                  <Input
                    value={education.gpa}
                    onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                    placeholder="3.8/4.0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
