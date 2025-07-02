import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ModernTemplate from "./templates/modern-template"
import ClassicTemplate from "./templates/classic-template"
import CreativeTemplate from "./templates/creative-template"
import MinimalTemplate from "./templates/minimal-template"

const TEMPLATE_NAMES = {
  modern: "Rizz Master",
  classic: "Executive Rizz",
  creative: "Creative Rizz",
  minimal: "Minimal Rizz",
  professional: "Pro Rizz",
  tech: "Tech Rizz",
  designer: "Design Rizz",
  marketing: "Marketing Rizz",
  academic: "Academic Rizz",
  executive: "Executive Elite",
  startup: "Startup Hustle",
  freelancer: "Freelance Flow",
}

export default function ResumePreview({ data, templateId }) {
  const renderTemplate = () => {
    switch (templateId) {
      case "modern":
      case "professional":
      case "tech":
        return <ModernTemplate data={data} />
      case "classic":
      case "executive":
      case "academic":
        return <ClassicTemplate data={data} />
      case "creative":
      case "designer":
      case "marketing":
        return <CreativeTemplate data={data} />
      case "minimal":
      case "startup":
      case "freelancer":
        return <MinimalTemplate data={data} />
      default:
        return <ModernTemplate data={data} />
    }
  }

  const getTemplateName = () => {
    return TEMPLATE_NAMES[templateId] || "Rizz Master"
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          Live Preview
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            {getTemplateName()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg p-4">
          <div className="transform scale-90 origin-top">{renderTemplate()}</div>
        </div>
      </CardContent>
    </Card>
  )
}
