"use client"

import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react"

export default function ClassicTemplate({ data }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString + "-01")
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div className="bg-white p-8 shadow-sm border rounded-lg" style={{ minHeight: "800px" }}>
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-black pb-6">
        <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-wider">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {data.personalInfo.location}
            </div>
          )}
        </div>
        {(data.personalInfo.website || data.personalInfo.linkedin) && (
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mt-2">
            {data.personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {data.personalInfo.website}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </div>
            )}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-black uppercase">{exp.jobTitle}</h3>
                    <p className="text-gray-800 font-semibold italic">{exp.company}</p>
                    {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-700 font-medium">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-800 text-sm whitespace-pre-line mt-2 ml-4">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-black">{edu.degree}</h3>
                    <p className="text-gray-800 italic">{edu.school}</p>
                    {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                    {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-700 font-medium">{formatDate(edu.graduationDate)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Core Competencies
          </h2>
          <div className="space-y-3">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-bold text-black mb-2">Technical Skills:</h3>
                <p className="text-gray-800">{data.skills.technical.join(" • ")}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-bold text-black mb-2">Professional Skills:</h3>
                <p className="text-gray-800">{data.skills.soft.join(" • ")}</p>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-bold text-black mb-2">Languages:</h3>
                <p className="text-gray-800">{data.skills.languages.join(" • ")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
