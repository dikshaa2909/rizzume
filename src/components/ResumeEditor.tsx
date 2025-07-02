"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowLeft, Download, Eye, Save } from "lucide-react"
import PersonalInfoForm from "./forms/PersonalInfoForm"
import ExperienceForm from "./forms/ExperienceForm"
import EducationForm from "./forms/EducationForm"
import SkillsForm from "./forms/SkillsForm"
import ResumePreview from "./ResumePreview"
import type { ResumeData } from "../types/resume"

interface ResumeEditorProps {
  templateId: string
  onBack: () => void
}

const ResumeEditor: React.FC<ResumeEditorProps> = ({ templateId, onBack }) => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
    },
  })

  const [activeTab, setActiveTab] = useState("personal")
  const [showPreview, setShowPreview] = useState(false)

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  const handleDownloadPDF = () => {
    // PDF generation logic will be implemented here
    alert("PDF download functionality will be implemented!")
  }

  const handleSaveDraft = () => {
    localStorage.setItem("resumeDraft", JSON.stringify(resumeData))
    alert("Draft saved successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Templates
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Resume Editor</h1>
                <p className="text-sm text-gray-600">Template: {templateId}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className={`grid gap-6 ${showPreview ? "lg:grid-cols-2" : "max-w-4xl mx-auto"}`}>
          {/* Editor Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Build Your Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="mt-6">
                    <PersonalInfoForm
                      data={resumeData.personalInfo}
                      onChange={(data) => updateResumeData("personalInfo", data)}
                    />
                  </TabsContent>

                  <TabsContent value="experience" className="mt-6">
                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) => updateResumeData("experience", data)}
                    />
                  </TabsContent>

                  <TabsContent value="education" className="mt-6">
                    <EducationForm
                      data={resumeData.education}
                      onChange={(data) => updateResumeData("education", data)}
                    />
                  </TabsContent>

                  <TabsContent value="skills" className="mt-6">
                    <SkillsForm data={resumeData.skills} onChange={(data) => updateResumeData("skills", data)} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <ResumePreview data={resumeData} templateId={templateId} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResumeEditor
