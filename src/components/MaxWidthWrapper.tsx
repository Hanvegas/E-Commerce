import React, { ReactNode } from 'react'
import { cn } from '@/libs/utils'

type MaxWidthProps = {
      children?: ReactNode
      className?: String
}

export default function MaxWidthWrapper({ className, children }: MaxWidthProps) {
      return (
            <div className={cn("max-w-screen-xl w-full mx-auto", className)}>
                  {children}
            </div>
      )
}