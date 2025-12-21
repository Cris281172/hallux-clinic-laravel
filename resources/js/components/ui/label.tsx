"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"
import { Star } from 'lucide-react';


interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
    requiredStar?: boolean
}

function Label({ className, requiredStar, children, ...props }: LabelProps) {
    return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex  items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    >
        {children}
        {requiredStar && <Star className="w-2 h-2 relative  text-white fill-white" />}
    </LabelPrimitive.Root>
  )
}

export { Label }
