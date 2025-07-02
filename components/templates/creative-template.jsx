"use client"

import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react"

export default function CreativeTemplate({ data }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString + "-01")
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div className="bg-white shadow-sm border rounded-lg overflow-hidden" style={{ minHeight: "800px" }}>
      <div className="grid grid-cols-3 h-full">
        {/* Sidebar */}
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo.fullName || "Your Name"}</h1>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">CONTACT</h2>
            <div className="space-y-3 text-sm">
              {data.personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <span className="break-all">{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  {data.personalInfo.phone}
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  {data.personalInfo.location}
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-yellow-400" />
                  <span className="break-all">{data.personalInfo.website}</span>
                </div>
              )}
              {data.personalInfo.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-yellow-400" />
                  <span>LinkedIn</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 text-yellow-400">SKILLS</h2>
              <div className="space-y-4">
                {data.skills.technical.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">TECHNICAL</h3>
                    <div className="space-y-2">
                      {data.skills.technical.map((skill, index) => (
                        <div key={index} className="text-sm">
                          <div className="flex justify-between mb-1">
                            <span>{skill}</span>
                          </div>
                          <div className="w-full bg-purple-400 rounded-full h-1">
                            <div className="bg-yellow-400 h-1 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">SOFT SKILLS</h3>
                    <div className="flex flex-wrap gap-1">
                      {data.skills.soft.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-yellow-400 text-purple-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.languages.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">LANGUAGES</h3>
                    <div className="space-y-1">
                      {data.skills.languages.map((skill, index) => (
                        <div key={index} className="text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-span-2 p-8">
          {/* Summary */}
          {data.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">ABOUT ME</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
              <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">EXPERIENCE</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                      <p className="text-purple-600 font-semibold">{exp.company}</p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        {exp.location && <span>{exp.location}</span>}
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    {exp.description && (
                      <div className="text-gray-700 text-sm whitespace-pre-line">{exp.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">EDUCATION</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-purple-600 font-semibold">{edu.school}</p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        {edu.location && <span>{edu.location}</span>}
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          {formatDate(edu.graduationDate)}
                        </span>
                      </div>
                      {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
