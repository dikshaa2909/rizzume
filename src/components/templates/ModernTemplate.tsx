import type React from "react"
import { Badge } from "../ui/badge"
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react"
import type { ResumeData } from "../../types/resume"

interface ModernTemplateProps {
  data: ResumeData
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString + "-01")
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div className="bg-white p-8 shadow-sm border rounded-lg" style={{ minHeight: "800px" }}>
      {/* Header with blue accent */}
      <div className="border-l-4 border-blue-600 pl-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              {data.personalInfo.location}
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">{data.personalInfo.website}</span>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">LinkedIn Profile</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-3 uppercase tracking-wide">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">Work Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-blue-100 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </span>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 text-sm whitespace-pre-line mt-2">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-blue-100 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold">{edu.school}</p>
                    {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                    {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {formatDate(edu.graduationDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wide">Skills</h2>
          <div className="space-y-4">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill, index) => (
                    <Badge key={index} className="bg-blue-600 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-blue-600 text-blue-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.languages.map((skill, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ModernTemplate
