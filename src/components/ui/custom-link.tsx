import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

const costumLinkVariants = cva(
      "relative",
      {
            variants: {
                  hoverVariant: {
                        default: "",
                        hoverLeft: "inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-50",
                        hoverCenter: "hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300 after:ease-in-out after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[3px] after:scale-x-0"
                  },
                  colorUnderline: {
                        white: "after:bg-white",
                        primary: "after:bg-primary-500",
                        primaryLight1: "after:bg-primary-100",
                        primaryLight2: "after:bg-primary-200",
                        primaryLight3: "after:bg-primary-300",
                        primaryLight4: "after:bg-primary-400",
                        primaryDark1: "after:bg-primary-600",
                        primaryDark2: "after:bg-primary-700",
                        primaryDark3: "after:bg-primary-800",
                        primaryDark4: "after:bg-primary-900",
                  },
                  size: {
                        default: "text-xl"
                  }
            },
            defaultVariants: {
                  hoverVariant: "default",
                  colorUnderline: "white",
                  size: "default"
            }
      }
)

interface CostumLinkProps extends
      VariantProps<typeof costumLinkVariants> {
      asChild?: boolean
      className?: string
      text?: string
      href: string
      children?: ReactNode
}

export const CustomLink = ({ asChild = false, children, text, href, className, hoverVariant, colorUnderline, size }: CostumLinkProps) => {
      const Comp = asChild ? Slot : Link
      return <Comp href={href} className={cn(costumLinkVariants({ hoverVariant, colorUnderline, size }), className)}>
            {children ? children : text}
      </Comp>
}
CustomLink.displayName = "CustomLink"