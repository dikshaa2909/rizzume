"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Zap, Shield, Eye, ArrowRight, Sparkles, Atom, SpaceIcon as Galaxy } from "lucide-react"
import TemplatesPage from "@/components/templates-page"
import ResumeEditor from "@/components/resume-editor"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const handleViewTemplates = () => {
    setCurrentPage("templates")
  }

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId)
    setCurrentPage("editor")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setSelectedTemplate(null)
  }

  const handleBackToTemplates = () => {
    setCurrentPage("templates")
    setSelectedTemplate(null)
  }

  if (currentPage === "editor" && selectedTemplate) {
    return <ResumeEditor templateId={selectedTemplate} onBack={handleBackToTemplates} />
  }

  if (currentPage === "templates") {
    return <TemplatesPage onSelectTemplate={handleTemplateSelect} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Space Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Starfield */}
        {[...Array(150)].map((_, i) => (
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Shooting Stars */}
        <div className="absolute top-20 left-20 w-1 h-20 bg-gradient-to-b from-white to-transparent transform rotate-45 animate-shooting-star"></div>
        <div className="absolute top-40 right-40 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-45 animate-shooting-star-delayed"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-24 lg:mb-32">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Rocket className="relative h-20 w-20 text-cyan-400 animate-bounce" />
              <Sparkles className="absolute -top-3 -right-3 h-10 w-10 text-yellow-400 animate-spin" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight">
            RIZZUME
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              BUILDER
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
            Build your career with <span className="text-cyan-400 font-semibold">AI-powered</span> resume templates that
            give you the ultimate rizz to land your dream job
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button
              onClick={handleViewTemplates}
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 border-0"
            >
              <Eye className="mr-4 h-7 w-7 group-hover:animate-pulse" />
              Explore Templates
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-3 text-gray-400 text-lg">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="font-medium">Free Forever • No Registration</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-12">
              <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl w-fit group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4 tracking-tight">Lightning Speed</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-12">
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Create professional resumes in under 5 minutes with our quantum-powered interface
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-12">
              <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl w-fit group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                <Galaxy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4 tracking-tight">Rizz Templates</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-12">
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Choose from 12+ professionally crafted templates designed to give you maximum rizz
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-12">
              <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl w-fit group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                <Atom className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4 tracking-tight">ATS Optimized</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-12">
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Optimized for all Applicant Tracking Systems to ensure your rizz gets noticed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rizz Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-20 font-light max-w-3xl mx-auto">
            Three simple steps to unlock your career rizz
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-black text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  1
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Choose Template</h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Select from our collection of rizz-worthy professionally designed templates
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white font-black text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  2
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Add Your Info</h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Fill in your details with our intuitive editor or skip optional sections
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-black text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  3
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Download & Slay</h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Download your rizz-filled resume and start slaying those job applications
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mb-20">
          <Card className="border-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden relative rounded-3xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <CardContent className="relative text-center py-20 px-12">
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-8 mr-0 mt-8 px-0 border-0">
                Ready to Unleash Your Rizz?
              </h3>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
                Join thousands of professionals who have unlocked their career rizz with our powerful resume builder
              </p>
              <Button
                onClick={handleViewTemplates}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-2xl font-black rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl border-0"
              >
                <Rocket className="mr-4 h-8 w-8" />
                Start Building
                <Sparkles className="ml-4 h-8 w-8" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-400 text-lg font-light">
            Made with <span className="text-red-500 text-xl">❤️</span> by{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Diksha
            </span>
          </p>
        </div>
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
        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(100px) rotate(45deg);
            opacity: 0;
          }
        }
        @keyframes shooting-star-delayed {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(100px) rotate(45deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-shooting-star {
          animation: shooting-star 3s ease-in-out infinite;
        }
        .animate-shooting-star-delayed {
          animation: shooting-star-delayed 4s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  )
}
