export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  summary: string
}

export interface Experience {
  id: string
  jobTitle: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  graduationDate: string
  gpa: string
}

export interface Skills {
  technical: string[]
  soft: string[]
  languages: string[]
}

export interface ResumeData {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skills
}
