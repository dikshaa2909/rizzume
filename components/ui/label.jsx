"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-base font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200 tracking-tight",
      className,
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
