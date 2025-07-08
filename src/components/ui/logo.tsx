import { cn } from "@/libs/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const logoContainerVariant = cva(
      "",
      {
            variants: {
                  variant: {
                        center: "clip-custom flex absolute -top-2 left-1/2 -translate-x-1/2 justify-center min-w-30 md:min-w-80 h-10 md:h-20",
                        relative: "relative",
                        static: "static"
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
                  },
                  color: {
                        default: "bg-transparent",
                        white: "bg-white",
                        dark: "bg-slate-900"
                  }
            },
            defaultVariants: {
                  variant: "static",
                  layer: 1,
                  color: "default"
            }
      }
)

const logoTextVariant = cva(
      "font-bold",
      {
            variants: {
                  size: {
                        default: "text-2xl md:text-4xl",
                        small: "text-xl md:text-3xl",
                        large: "text-5xl"
                  },
                  margin: {
                        default: "m-0",
                        mt3: "mt-1 md:mt-3"
                  },
                  colorText: {
                        default: "text-primary-500",
                        light1: "text-primary-100",
                        light2: "text-primary-200",
                        light3: "text-primary-300",
                        light4: "text-primary-400",
                        dark1: "text-primary-600",
                        dark2: "text-primary-700",
                        dark3: "text-primary-800",
                        dark4: "text-primary-900",
                        white: "text-white",
                        black: "text-black"
                  }
            },
            defaultVariants: {
                  size: "default",
                  margin: "default",
                  colorText: "default"
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

export const Logo = ({ classNameContainer, classNameText, variant, size, margin, text = "VEGAS", asChild = false, layer, color, colorText }: LogoProps) => {
      const Comp = asChild ? Slot : "div"
      return (
            <Comp className={cn(logoContainerVariant({ variant, layer, color }), classNameContainer)}>
                  <span className={cn(logoTextVariant({ size, margin, colorText }), classNameText)}>{text}</span>
            </Comp>
      )
}
Logo.displayName = "Logo"