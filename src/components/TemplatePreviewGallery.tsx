"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import ModernTemplate from "./templates/ModernTemplate"
import ClassicTemplate from "./templates/ClassicTemplate"
import CreativeTemplate from "./templates/CreativeTemplate"
import MinimalTemplate from "./templates/MinimalTemplate"
import type { ResumeData } from "../types/resume"

const sampleData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    website: "johndoe.com",
    linkedin: "linkedin.com/in/johndoe",
    summary:
      "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies.",
  },
  experience: [
    {
      id: "1",
      jobTitle: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "",
      current: true,
      description:
        "• Led development of microservices architecture serving 1M+ users\n• Improved application performance by 40% through optimization\n• Mentored junior developers and conducted code reviews",
    },
    {
      id: "2",
      jobTitle: "Software Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      startDate: "2020-06",
      endDate: "2021-12",
      current: false,
      description:
        "• Built responsive web applications using React and TypeScript\n• Collaborated with design team to implement pixel-perfect UIs\n• Integrated third-party APIs and payment systems",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "Boston, MA",
      graduationDate: "2020-05",
      gpa: "3.8/4.0",
    },
  ],
  skills: {
    technical: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
    languages: ["English (Native)", "Spanish (Conversational)"],
  },
}

interface TemplatePreviewGalleryProps {
  onSelectTemplate: (templateId: string) => void
}

const TemplatePreviewGallery: React.FC<TemplatePreviewGalleryProps> = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: "modern",
      name: "Modern Professional",
      description: "Clean design with blue accents",
      component: <ModernTemplate data={sampleData} />,
    },
    {
      id: "classic",
      name: "Classic Executive",
      description: "Traditional black and white layout",
      component: <ClassicTemplate data={sampleData} />,
    },
    {
      id: "creative",
      name: "Creative Designer",
      description: "Colorful sidebar layout",
      component: <CreativeTemplate data={sampleData} />,
    },
    {
      id: "minimal",
      name: "Minimal Clean",
      description: "Ultra-clean with lots of whitespace",
      component: <MinimalTemplate data={sampleData} />,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Template</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Each template is professionally designed and optimized for different industries and career levels.
        </p>
      </div>

      <div className="grid gap-8">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <p className="text-gray-600 mt-1">{template.description}</p>
                </div>
                <Button onClick={() => onSelectTemplate(template.id)}>Use This Template</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="transform scale-50 origin-top-left overflow-hidden rounded-lg border">
                {template.component}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TemplatePreviewGallery
