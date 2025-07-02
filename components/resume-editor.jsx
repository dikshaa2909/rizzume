"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Download, Eye, Save, Check, SkipForward } from "lucide-react"
import PersonalInfoForm from "./forms/personal-info-form"
import ExperienceForm from "./forms/experience-form"
import EducationForm from "./forms/education-form"
import SkillsForm from "./forms/skills-form"
import ResumePreview from "./resume-preview"
import { generatePDF, generateFilename } from "../lib/pdf-generator"

const STEPS = [
  { id: "personal", label: "Personal Info", icon: "👤" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "skills", label: "Skills", icon: "⚡" },
]

export default function ResumeEditor({ templateId, onBack }) {
  const [resumeData, setResumeData] = useState({
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

  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [showPreview, setShowPreview] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const previewRef = useRef(null)

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  const validateStep = (stepIndex) => {
    const step = STEPS[stepIndex]
    switch (step.id) {
      case "personal":
        return resumeData.personalInfo.fullName && resumeData.personalInfo.email
      case "experience":
        return resumeData.experience.length > 0
      case "education":
        return resumeData.education.length > 0
      case "skills":
        return resumeData.skills.technical.length > 0 || resumeData.skills.soft.length > 0
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]))
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  const handleDownloadPDF = async () => {
    if (!showPreview) {
      setShowPreview(true)
      // Wait for preview to render
      setTimeout(() => downloadPDF(), 500)
    } else {
      await downloadPDF()
    }
  }

  const downloadPDF = async () => {
    try {
      setIsGeneratingPDF(true)

      const filename = generateFilename(resumeData.personalInfo, templateId)

      await generatePDF("resume-preview-pdf", {
        filename,
        format: "a4",
        orientation: "portrait",
        quality: 2,
      })
    } catch (error) {
      console.error("PDF generation failed:", error)
      alert("Failed to generate PDF. Please try again.")
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const handleSaveDraft = () => {
    localStorage.setItem("resumeDraft", JSON.stringify(resumeData))
    alert("Draft saved successfully!")
  }

  const progress = ((currentStep + 1) / STEPS.length) * 100

  const renderCurrentForm = () => {
    const step = STEPS[currentStep]
    switch (step.id) {
      case "personal":
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onChange={(data) => updateResumeData("personalInfo", data)}
          />
        )
      case "experience":
        return <ExperienceForm data={resumeData.experience} onChange={(data) => updateResumeData("experience", data)} />
      case "education":
        return <EducationForm data={resumeData.education} onChange={(data) => updateResumeData("education", data)} />
      case "skills":
        return <SkillsForm data={resumeData.skills} onChange={(data) => updateResumeData("skills", data)} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        {/* Animated Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Templates
              </Button>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  RIZZUME BUILDER
                </h1>
                <p className="text-sm text-gray-400">Template: {templateId}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
              >
                <Eye className="h-5 w-5 mr-2" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Download className="h-4 w-4 mr-2" />
                {isGeneratingPDF ? "Generating..." : "Download PDF"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className={`grid gap-6 ${showPreview ? "lg:grid-cols-2" : "max-w-4xl mx-auto"}`}>
          {/* Editor Panel */}
          <div className="space-y-6">
            {/* Progress Section */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-bold text-xl">Rizzume Building Progress</CardTitle>
                <Progress value={progress} className="w-full h-3 bg-gray-700" />
                <p className="text-lg text-white font-medium mt-2">
                  Step {currentStep + 1} of {STEPS.length} - {STEPS[currentStep].label}
                </p>
              </CardHeader>
            </Card>

            {/* Steps Navigation */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  {STEPS.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(index)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                        index === currentStep
                          ? "bg-purple-600 text-white"
                          : completedSteps.has(index)
                            ? "bg-green-600 text-white"
                            : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {completedSteps.has(index) ? <Check className="h-6 w-6" /> : step.icon}
                      </div>
                      <span className="text-xs font-medium">{step.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Form Section */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="text-2xl">{STEPS[currentStep].icon}</span>
                  {STEPS[currentStep].label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderCurrentForm()}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    {currentStep < STEPS.length - 1 && (
                      <Button
                        variant="ghost"
                        onClick={handleSkip}
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <SkipForward className="h-4 w-4 mr-2" />
                        Skip
                      </Button>
                    )}

                    {currentStep < STEPS.length - 1 ? (
                      <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleDownloadPDF}
                        disabled={isGeneratingPDF}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 text-lg font-bold rounded-xl"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {isGeneratingPDF ? "Generating..." : "Done - Download PDF"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div id="resume-preview-pdf">
                <ResumePreview data={resumeData} templateId={templateId} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
