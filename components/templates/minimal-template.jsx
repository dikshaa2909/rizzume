"use client"

import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react"

export default function MinimalTemplate({ data }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString + "-01")
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div className="bg-white p-12 shadow-sm border rounded-lg" style={{ minHeight: "800px" }}>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-8 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {data.personalInfo.location}
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {data.personalInfo.website}
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg font-light">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Experience</h2>
          <div className="space-y-10">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.jobTitle}</h3>
                    <p className="text-gray-600 font-light">{exp.company}</p>
                    {exp.location && <p className="text-gray-500 text-sm font-light">{exp.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-500 font-light">
                    {formatDate(exp.startDate)} — {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 font-light leading-relaxed whitespace-pre-line">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 font-light">{edu.school}</p>
                    {edu.location && <p className="text-gray-500 text-sm font-light">{edu.location}</p>}
                    {edu.gpa && <p className="text-gray-500 text-sm font-light">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-500 font-light">{formatDate(edu.graduationDate)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Skills</h2>
          <div className="space-y-6">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Technical</h3>
                <p className="text-gray-700 font-light">{data.skills.technical.join(", ")}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Professional</h3>
                <p className="text-gray-700 font-light">{data.skills.soft.join(", ")}</p>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Languages</h3>
                <p className="text-gray-700 font-light">{data.skills.languages.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
