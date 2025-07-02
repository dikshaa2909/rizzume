"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { FileText, Palette, Download, Eye } from "lucide-react"
import ResumeEditor from "./components/ResumeEditor"
import TemplatePreviewGallery from "./components/TemplatePreviewGallery"
import "./App.css"

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean design with blue accents, perfect for tech and business roles",
    preview: "https://via.placeholder.com/200x300/3B82F6/FFFFFF?text=Modern",
    color: "blue",
    features: ["Clean layout", "Professional colors", "ATS-friendly"],
  },
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional black and white layout for corporate positions",
    preview: "https://via.placeholder.com/200x300/6B7280/FFFFFF?text=Classic",
    color: "gray",
    features: ["Traditional design", "Corporate style", "Timeless appeal"],
  },
  {
    id: "creative",
    name: "Creative Designer",
    description: "Colorful sidebar layout perfect for creative professionals",
    preview: "https://via.placeholder.com/200x300/8B5CF6/FFFFFF?text=Creative",
    color: "purple",
    features: ["Sidebar layout", "Creative colors", "Visual appeal"],
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Ultra-clean design with plenty of white space",
    preview: "https://via.placeholder.com/200x300/10B981/FFFFFF?text=Minimal",
    color: "green",
    features: ["Minimal design", "Lots of whitespace", "Easy to read"],
  },
]

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [showEditor, setShowEditor] = useState(false)
  const [showTemplateGallery, setShowTemplateGallery] = useState(false)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setShowEditor(true)
  }

  const handleBackToTemplates = () => {
    setShowEditor(false)
    setSelectedTemplate(null)
  }

  if (showEditor && selectedTemplate) {
    return <ResumeEditor templateId={selectedTemplate} onBack={handleBackToTemplates} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Resume Builder Pro</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional resumes in minutes with our beautiful templates and easy-to-use editor
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Palette className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle>Multiple Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Choose from professionally designed templates for every industry</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">See your changes in real-time as you build your resume</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle>PDF Download</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Download your finished resume as a high-quality PDF</p>
            </CardContent>
          </Card>
        </div>

        {/* Template Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Template</h2>
            <Button variant="outline" onClick={() => setShowTemplateGallery(!showTemplateGallery)}>
              {showTemplateGallery ? "Show Grid View" : "Show Full Previews"}
            </Button>
          </div>

          {showTemplateGallery ? (
            <TemplatePreviewGallery onSelectTemplate={handleTemplateSelect} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="cursor-pointer hover:shadow-lg transition-shadow group">
                  <CardHeader className="pb-2">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge variant="secondary" className={`bg-${template.color}-100 text-${template.color}-700`}>
                        Popular
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-3">{template.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.features?.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleTemplateSelect(template.id)} className="w-full">
                      Use This Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Perfect Resume?</h3>
          <p className="text-gray-600 mb-6">Join thousands of professionals who have landed their dream jobs</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
