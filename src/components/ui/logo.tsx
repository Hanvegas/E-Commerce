import { cn } from "@/libs/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const logoContainerVariant = cva(
      "flex justify-center bg-white",
      {
            variants: {
                  justify: {
                        center: "clip-custom absolute -top-2 left-1/2 -translate-x-1/2 min-w-30 md: min-w-80 h-10 md:h-17"
                  },
                  layer: {
                        m5: "-z-50",
                        m4: "-z-40",
                        m3: "-z-30",
                        m2: "-z-20",
                        m1: "-z-10",
                        1: "z-10",
                        2: "z-20",
                        3: "z-30",
                        4: "z-40",
                        5: "z-50",
                  }
            },
            defaultVariants: {
                  justify: "center"
            }
      }
)

const logoTextVariant = cva(
      "font-bold",
      {
            variants: {
                  size: {
                        default: "text-2xl md:text-4xl",
                        small: "text-xl md:text-3xl"
                  },
                  margin: {
                        default: "mt-1 md:mt-4"
                  }
            },
            defaultVariants: {
                  size: "default",
                  margin: "default"
            }
      }
)

interface LogoProps extends
      VariantProps<typeof logoContainerVariant>,
      VariantProps<typeof logoTextVariant> {
      asChild?: boolean
      classNameContainer?: string
      classNameText?: string
      text?: string
}

export const Logo = ({ classNameContainer, classNameText, justify, size, margin, text = "VEGAS", asChild = false, layer }: LogoProps) => {
      const Comp = asChild ? Slot : "div"
      return (
            <Comp className={cn(logoContainerVariant({ justify, layer }), classNameContainer)}>
                  <span className={cn(logoTextVariant({ size, margin }), classNameText)}>{text}</span>
            </Comp>
      )
}
Logo.displayName = "Logo"