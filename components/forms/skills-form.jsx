"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, X } from "lucide-react"

export default function SkillsForm({ data, onChange }) {
  const [newSkill, setNewSkill] = useState({ technical: "", soft: "", languages: "" })

  const addSkill = (category) => {
    const skill = newSkill[category].trim()
    if (skill && !data[category].includes(skill)) {
      onChange({
        ...data,
        [category]: [...data[category], skill],
      })
      setNewSkill({ ...newSkill, [category]: "" })
    }
  }

  const removeSkill = (category, skillToRemove) => {
    onChange({
      ...data,
      [category]: data[category].filter((skill) => skill !== skillToRemove),
    })
  }

  const handleKeyPress = (e, category) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill(category)
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Skills</h3>

      {/* Technical Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newSkill.technical}
              onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "technical")}
              placeholder="e.g., JavaScript, React, Python"
            />
            <Button onClick={() => addSkill("technical")} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.technical.map((skill, index) => (
              <Badge key={index} variant="secondary" className="gap-1">
                {skill}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill("technical", skill)} />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Soft Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newSkill.soft}
              onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "soft")}
              placeholder="e.g., Leadership, Communication, Problem Solving"
            />
            <Button onClick={() => addSkill("soft")} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.soft.map((skill, index) => (
              <Badge key={index} variant="secondary" className="gap-1">
                {skill}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill("soft", skill)} />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newSkill.languages}
              onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "languages")}
              placeholder="e.g., English (Native), Spanish (Fluent)"
            />
            <Button onClick={() => addSkill("languages")} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((skill, index) => (
              <Badge key={index} variant="secondary" className="gap-1">
                {skill}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill("languages", skill)} />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
