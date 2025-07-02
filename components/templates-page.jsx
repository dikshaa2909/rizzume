"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Eye,
  Rocket,
  Star,
  Zap,
  Crown,
  Sparkles,
  Atom,
  Orbit,
  Diamond,
  Hexagon,
  Triangle,
  Circle,
  Square,
} from "lucide-react"

const templates = [
  {
    id: "nebula",
    name: "Nebula Professional",
    description: "A stellar blend of professionalism and cosmic design",
    category: "Professional",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    icon: <Star className="h-6 w-6" />,
    features: ["ATS Optimized", "Modern Design", "Clean Layout"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs overflow-hidden">
        <div className="border-l-4 border-blue-600 pl-2 mb-3">
          <h1 className="text-base font-bold text-gray-900 leading-tight">JOHN DOE</h1>
          <p className="text-blue-600 text-sm">Software Engineer</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-blue-600 font-bold text-xs mb-1">EXPERIENCE</h2>
            <div className="border-l-2 border-blue-100 pl-2">
              <h3 className="font-bold text-xs">Senior Developer</h3>
              <p className="text-blue-600 text-xs">Tech Corp</p>
            </div>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-xs mb-1">SKILLS</h2>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">React</span>
              <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "galaxy",
    name: "Galaxy Executive",
    description: "For leaders who command attention across the universe",
    category: "Executive",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    icon: <Crown className="h-6 w-6" />,
    features: ["Executive Style", "Premium Look", "Leadership Focus"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs overflow-hidden">
        <div className="text-center border-b-2 border-black pb-2 mb-3">
          <h1 className="text-base font-bold text-black uppercase leading-tight">JOHN DOE</h1>
          <p className="text-gray-700 text-sm">Chief Executive Officer</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-black font-bold text-xs border-b border-gray-300 pb-0.5 mb-1">EXECUTIVE EXPERIENCE</h2>
            <h3 className="font-bold text-xs uppercase">CEO</h3>
            <p className="text-gray-800 italic text-xs">Fortune 500 Company</p>
          </div>
          <div>
            <h2 className="text-black font-bold text-xs border-b border-gray-300 pb-0.5 mb-1">CORE COMPETENCIES</h2>
            <p className="text-gray-800 text-xs">Strategic Leadership • P&L Management</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cosmic",
    name: "Rizz Creative",
    description: "Perfect for creative minds with maximum rizz",
    category: "Creative",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
    icon: <Sparkles className="h-6 w-6" />,
    features: ["Creative Layout", "Visual Appeal", "Artistic Design"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg overflow-hidden text-xs grid grid-cols-3">
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white p-2 flex flex-col">
          <h1 className="text-sm font-bold mb-1 leading-tight">JOHN DOE</h1>
          <div className="w-4 h-0.5 bg-yellow-400 mb-2"></div>
          <h2 className="text-yellow-400 font-bold text-xs mb-1">CONTACT</h2>
          <p className="text-xs mb-1">john@email.com</p>
          <h2 className="text-yellow-400 font-bold text-xs mb-1">SKILLS</h2>
          <span className="bg-yellow-400 text-purple-800 px-1 py-0.5 rounded text-xs font-medium">Design</span>
        </div>
        <div className="col-span-2 p-2 flex flex-col">
          <h2 className="text-purple-600 font-bold text-sm mb-1">ABOUT ME</h2>
          <div className="w-6 h-0.5 bg-yellow-400 mb-1"></div>
          <p className="text-xs mb-2 leading-tight">Creative professional...</p>
          <h2 className="text-purple-600 font-bold text-sm mb-1">EXPERIENCE</h2>
          <div className="w-6 h-0.5 bg-yellow-400 mb-1"></div>
          <h3 className="font-bold text-xs">Creative Director</h3>
          <p className="text-purple-600 text-xs">Design Studio</p>
        </div>
      </div>
    ),
  },
  {
    id: "stellar",
    name: "Rizz Minimal",
    description: "Clean and minimal with maximum rizz impact",
    category: "Minimal",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: <Circle className="h-6 w-6" />,
    features: ["Minimal Design", "Clean Typography", "Spacious Layout"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs overflow-hidden">
        <div className="mb-4">
          <h1 className="text-xl font-light text-gray-900 mb-1 leading-tight">JOHN DOE</h1>
          <p className="text-gray-600 text-sm">john@email.com • +1 555 123 4567</p>
        </div>
        <div className="space-y-3">
          <div>
            <h2 className="text-gray-900 font-light text-sm mb-1">Experience</h2>
            <h3 className="font-medium text-xs">Software Engineer</h3>
            <p className="text-gray-600 font-light text-xs">Tech Company</p>
          </div>
          <div>
            <h2 className="text-gray-900 font-light text-sm mb-1">Skills</h2>
            <p className="text-gray-700 font-light text-xs">JavaScript, React, Node.js</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "orbit",
    name: "Orbit Modern",
    description: "Modern design that orbits around your achievements",
    category: "Modern",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: <Orbit className="h-6 w-6" />,
    features: ["Modern Style", "Tech-Friendly", "Contemporary"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-2 rounded-lg mb-3">
          <h1 className="text-base font-bold leading-tight">JOHN DOE</h1>
          <p className="text-sm opacity-90">Full Stack Developer</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-emerald-600 font-bold text-xs mb-1">EXPERIENCE</h2>
            <div className="border-l-2 border-emerald-200 pl-2">
              <h3 className="font-bold text-xs">Senior Developer</h3>
              <p className="text-emerald-600 text-xs">Modern Tech Inc</p>
            </div>
          </div>
          <div>
            <h2 className="text-emerald-600 font-bold text-xs mb-1">SKILLS</h2>
            <div className="flex flex-wrap gap-1">
              <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-xs">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "supernova",
    name: "Supernova Bold",
    description: "Explosive design for those who want to make an impact",
    category: "Bold",
    gradient: "from-red-500 via-pink-500 to-purple-500",
    icon: <Rocket className="h-6 w-6" />,
    features: ["Bold Design", "Eye-Catching", "Impact-Focused"],
    mockup: (
      <div className="w-full h-full bg-black rounded-lg p-3 text-xs text-white overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-lg mb-3">
          <h1 className="text-base font-black uppercase leading-tight">JOHN DOE</h1>
          <p className="text-sm font-bold">MARKETING DIRECTOR</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-red-400 font-black text-xs mb-1">ACHIEVEMENTS</h2>
            <div className="border-l-2 border-red-400 pl-2">
              <h3 className="font-bold text-xs">Marketing Lead</h3>
              <p className="text-red-400 text-xs">Growth Company</p>
            </div>
          </div>
          <div>
            <h2 className="text-red-400 font-black text-xs mb-1">EXPERTISE</h2>
            <div className="flex flex-wrap gap-1">
              <span className="bg-red-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">Growth</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aurora",
    name: "Aurora Elegant",
    description: "Elegant like the northern lights dancing in space",
    category: "Elegant",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: <Diamond className="h-6 w-6" />,
    features: ["Elegant Style", "Sophisticated", "Refined Look"],
    mockup: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-3 text-xs overflow-hidden">
        <div className="text-center mb-3 pb-2 border-b border-indigo-200">
          <h1 className="text-base font-serif text-indigo-900 mb-1 leading-tight">John Doe</h1>
          <p className="text-indigo-600 italic text-sm">Senior Consultant</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-indigo-800 font-serif text-sm mb-1">Experience</h2>
            <div className="pl-2 border-l-2 border-indigo-200">
              <h3 className="font-semibold text-xs">Senior Consultant</h3>
              <p className="text-indigo-600 italic text-xs">Consulting Firm</p>
            </div>
          </div>
          <div>
            <h2 className="text-indigo-800 font-serif text-sm mb-1">Skills</h2>
            <p className="text-indigo-700 text-xs">Strategy • Analysis • Leadership</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "meteor",
    name: "Meteor Dynamic",
    description: "Dynamic design that streaks across the competition",
    category: "Dynamic",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    icon: <Zap className="h-6 w-6" />,
    features: ["Dynamic Layout", "Energetic", "Movement-Based"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
        <div className="relative z-10 mb-3">
          <h1 className="text-base font-black text-gray-900 mb-1 transform -skew-x-12 leading-tight">JOHN DOE</h1>
          <p className="text-orange-600 font-bold text-sm">SALES MANAGER</p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
        </div>
        <div className="space-y-2 relative z-10">
          <div>
            <h2 className="text-orange-600 font-black text-xs mb-1 transform -skew-x-6">EXPERIENCE</h2>
            <h3 className="font-bold text-xs">Sales Director</h3>
            <p className="text-orange-600 text-xs">Dynamic Corp</p>
          </div>
          <div>
            <h2 className="text-orange-600 font-black text-xs mb-1 transform -skew-x-6">SKILLS</h2>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold transform -skew-x-12 inline-block">
              Sales
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "quantum",
    name: "Quantum Tech",
    description: "Cutting-edge design for tech professionals",
    category: "Tech",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    icon: <Atom className="h-6 w-6" />,
    features: ["Tech-Focused", "Futuristic", "Code-Friendly"],
    mockup: (
      <div className="w-full h-full bg-gray-900 rounded-lg p-3 text-xs text-white font-mono overflow-hidden">
        <div className="border border-cyan-400 p-2 rounded mb-3">
          <h1 className="text-cyan-400 font-bold text-base leading-tight">$ whoami</h1>
          <p className="text-green-400 text-sm">john_doe@developer:~</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-cyan-400 font-bold text-xs mb-1">// EXPERIENCE</h2>
            <div className="pl-2 border-l border-cyan-400">
              <h3 className="text-green-400 font-bold text-xs">Senior DevOps Engineer</h3>
              <p className="text-blue-400 text-xs">TechCorp Inc.</p>
            </div>
          </div>
          <div>
            <h2 className="text-cyan-400 font-bold text-xs mb-1">// STACK</h2>
            <div className="flex flex-wrap gap-1">
              <span className="bg-cyan-400 text-gray-900 px-1.5 py-0.5 rounded text-xs font-bold">Docker</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "constellation",
    name: "Constellation Classic",
    description: "Timeless design that never goes out of style",
    category: "Classic",
    gradient: "from-gray-600 via-slate-600 to-gray-800",
    icon: <Hexagon className="h-6 w-6" />,
    features: ["Timeless", "Professional", "Traditional"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs border overflow-hidden">
        <div className="text-center mb-3 pb-2 border-b-2 border-gray-800">
          <h1 className="text-base font-bold text-gray-900 uppercase tracking-wider leading-tight">JOHN DOE</h1>
          <p className="text-gray-700 text-sm">BUSINESS ANALYST</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-gray-800 font-bold text-xs border-b border-gray-300 pb-0.5 mb-1 uppercase">
              EXPERIENCE
            </h2>
            <h3 className="font-bold text-xs">Senior Analyst</h3>
            <p className="text-gray-700 text-xs">Corporate Solutions</p>
          </div>
          <div>
            <h2 className="text-gray-800 font-bold text-xs border-b border-gray-300 pb-0.5 mb-1 uppercase">SKILLS</h2>
            <p className="text-gray-700 text-xs">Analysis • Reporting • Strategy</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pulsar",
    name: "Pulsar Academic",
    description: "Perfect for researchers and academic professionals",
    category: "Academic",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: <Triangle className="h-6 w-6" />,
    features: ["Academic Focus", "Research-Friendly", "Publication Ready"],
    mockup: (
      <div className="w-full h-full bg-white rounded-lg p-3 text-xs overflow-hidden">
        <div className="text-center mb-3">
          <h1 className="text-base font-serif text-blue-900 mb-1 leading-tight">Dr. John Doe, Ph.D.</h1>
          <p className="text-blue-700 text-sm">Research Scientist</p>
          <p className="text-gray-600 text-xs">University of Science</p>
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-blue-800 font-bold text-xs mb-1">RESEARCH EXPERIENCE</h2>
            <h3 className="font-semibold text-xs">Principal Investigator</h3>
            <p className="text-blue-700 italic text-xs">National Research Lab</p>
          </div>
          <div>
            <h2 className="text-blue-800 font-bold text-xs mb-1">PUBLICATIONS</h2>
            <p className="text-gray-700 text-xs">• "Advanced Research Methods" (2023)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "vortex",
    name: "Vortex Creative Pro",
    description: "Advanced creative template for design professionals",
    category: "Creative Pro",
    gradient: "from-purple-600 via-pink-500 to-red-500",
    icon: <Square className="h-6 w-6" />,
    features: ["Portfolio Ready", "Visual Heavy", "Creative Focus"],
    mockup: (
      <div className="w-full h-full bg-black rounded-lg p-3 text-xs text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-red-500/20"></div>
        <div className="relative z-10 text-center mb-3">
          <h1 className="text-base font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            JOHN DOE
          </h1>
          <p className="text-pink-400 font-bold text-sm">CREATIVE DIRECTOR</p>
        </div>
        <div className="space-y-2 relative z-10">
          <div>
            <h2 className="text-purple-400 font-black text-xs mb-1">EXPERIENCE</h2>
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-1.5 rounded">
              <h3 className="font-bold text-xs">Art Director</h3>
              <p className="text-pink-400 text-xs">Creative Agency</p>
            </div>
          </div>
          <div>
            <h2 className="text-purple-400 font-black text-xs mb-1">PORTFOLIO</h2>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-3 rounded"></div>
              <div className="bg-gradient-to-br from-pink-500 to-red-500 h-3 rounded"></div>
              <div className="bg-gradient-to-br from-red-500 to-purple-500 h-3 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

const categories = [
  "All",
  "Professional",
  "Executive",
  "Creative",
  "Minimal",
  "Modern",
  "Bold",
  "Elegant",
  "Dynamic",
  "Tech",
  "Classic",
  "Academic",
  "Creative Pro",
]

export default function TemplatesPage({ onSelectTemplate, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Space Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Starfield */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}

        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/10 transition-all duration-300 text-lg px-6 py-3 rounded-xl self-start"
          >
            <ArrowLeft className="h-6 w-6 mr-3" />
            Back to Home
          </Button>

          <div className="text-center flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
              RIZZUME TEMPLATES
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Choose from our collection of professionally crafted resume templates with maximum rizz
            </p>
          </div>

          <div className="w-32 lg:block hidden"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-2xl transition-all duration-300 text-base font-semibold ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl scale-105"
                  : "bg-transparent border-gray-600 text-gray-300 hover:bg-white/10 hover:border-gray-400 hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid - Perfect Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border-0 overflow-hidden bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Template Preview - Fixed Height */}
              <div className="relative p-6 pb-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden relative shadow-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Template Mockup - Perfectly Centered */}
                  <div className="absolute inset-0 p-4 group-hover:scale-105 transition-transform duration-700">
                    {template.mockup}
                  </div>

                  {/* Category Badge - Fixed Position */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={`bg-gradient-to-r ${template.gradient} text-white border-0 shadow-xl px-3 py-1 text-sm font-bold`}
                    >
                      {template.category}
                    </Badge>
                  </div>

                  {/* Icon - Fixed Position */}
                  <div className="absolute top-3 left-3">
                    <div className={`p-2 bg-gradient-to-r ${template.gradient} rounded-xl text-white shadow-xl`}>
                      {template.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area - Flexible Height */}
              <div className="px-6 pb-4 flex-1 flex flex-col">
                {/* Template Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight mb-2 line-clamp-1">
                    {template.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-2">
                    {template.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.features?.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-gray-800/50 text-gray-300 border-gray-600 px-2 py-1 font-medium"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Button - Always at Bottom */}
                <div className="mt-auto">
                  <Button
                    onClick={() => onSelectTemplate(template.id)}
                    className={`w-full bg-gradient-to-r ${template.gradient} hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white border-0 py-3 font-bold rounded-2xl text-base`}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Use This Template
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-8">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">No templates found in this galaxy</h3>
            <p className="text-gray-400 text-xl font-light">Try exploring a different category</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-180deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
