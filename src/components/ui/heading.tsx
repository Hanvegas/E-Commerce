import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { JSX, ReactNode } from "react";

const headingVariants = cva(
      "font-bold",
      {
            variants: {
                  color: {
                        default: "text-black",
                        white: "text-white"
                  },
                  size: {
                        default: "text-2xl md:text-5xl"
                  }
            },
            defaultVariants: {
                  color: "default",
                  size: "default"
            }
      }
)

interface HeadingProps extends
      VariantProps<typeof headingVariants> {
      level: 1 | 2 | 3 | 4 | 5 | 6
      children?: ReactNode
      className?: String
}

export const Heading = ({ size, color, level, children, className }: HeadingProps) => {
      const Tag = `h${level}` as keyof JSX.IntrinsicElements
      return (
            <Tag className={cn(headingVariants({ size, color }), className)}>
                  {children}
            </Tag>
      )
}
Heading.displayName = "Heading"