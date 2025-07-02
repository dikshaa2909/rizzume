"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background tracking-tight"

  const variants = {
    default:
      "bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800 shadow-xl hover:shadow-2xl hover:scale-105",
    outline:
      "border-2 border-gray-600 bg-transparent hover:bg-white/10 text-gray-300 hover:border-gray-400 hover:scale-105",
    ghost: "hover:bg-white/10 text-gray-300 hover:scale-105",
  }

  const sizes = {
    default: "h-12 py-3 px-8",
    sm: "h-10 px-6 rounded-lg text-sm",
    lg: "h-16 px-12 rounded-2xl text-xl font-black",
  }

  return <button className={cn(baseClasses, variants[variant], sizes[size], className)} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button }
