import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const costumLinkVariants = cva(
      "relative",
      {
            variants: {
                  variant: {
                        default: "hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[3px] after:bg-[#7E22CD] after:scale-x-0"
                  },
                  size: {
                        default: "text-xl"
                  }
            },
            defaultVariants: {
                  variant: "default",
                  size: "default"
            }
      }
)

interface CostumLinkProps extends
      VariantProps<typeof costumLinkVariants> {
      className?: string
      text: string
      href: string
}

export const CustomLink = ({ text, href, className, variant, size }: CostumLinkProps) => {
      return <Link href={href} className={cn(costumLinkVariants({ variant, size }), className)}>{text}</Link>
}