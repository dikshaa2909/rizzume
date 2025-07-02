"use client"
import { cn } from "@/lib/utils"

const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default:
      "border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md",
    secondary: "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "text-gray-600 border-gray-200 bg-white hover:bg-gray-50",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
