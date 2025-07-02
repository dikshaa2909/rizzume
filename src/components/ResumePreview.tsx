import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import ModernTemplate from "./templates/ModernTemplate"
import ClassicTemplate from "./templates/ClassicTemplate"
import CreativeTemplate from "./templates/CreativeTemplate"
import MinimalTemplate from "./templates/MinimalTemplate"
import type { ResumeData } from "../types/resume"

interface ResumePreviewProps {
  data: ResumeData
  templateId: string
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case "modern":
        return <ModernTemplate data={data} />
      case "classic":
        return <ClassicTemplate data={data} />
      case "creative":
        return <CreativeTemplate data={data} />
      case "minimal":
        return <MinimalTemplate data={data} />
      default:
        return <ModernTemplate data={data} />
    }
  }

  const getTemplateName = () => {
    switch (templateId) {
      case "modern":
        return "Modern Professional"
      case "classic":
        return "Classic Executive"
      case "creative":
        return "Creative Designer"
      case "minimal":
        return "Minimal Clean"
      default:
        return "Modern Professional"
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Live Preview
          <Badge variant="outline">{getTemplateName()}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="transform scale-90 origin-top">{renderTemplate()}</div>
      </CardContent>
    </Card>
  )
}

export default ResumePreview
