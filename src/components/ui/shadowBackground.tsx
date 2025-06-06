import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const shadowBackgroundVariants = cva(
      "absolute inset-0",
      {
            variants: {
                  directionTo: {
                        top: "bg-gradient-to-t",
                        bottom: "bg-gradient-to-b",
                        left: "bg-gradient-to-l",
                        right: "bg-gradient-to-r",
                        full: "bg-black/60"
                  },
                  variant: {
                        20: "from-black/20 to-transparent",
                        viaTransparent20: "from-black/20 via-transparent to-transparent",
                        50: "from-black/50 to-transparent",
                        viaTransparent50: "from-black/50 via-transparent to-transparent",
                        60: "from-black/60 to-transparent",
                        viaTransparent60: "from-black/60 via-transparent to-transparent",
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
                  variant: 50,
                  directionTo: "top",
                  layer: 1
            }
      }
)

export interface ShadowBackgroundProps extends
      VariantProps<typeof shadowBackgroundVariants> {
      className?: string
}

export const ShadowBackground = ({ className, directionTo, variant, layer }: ShadowBackgroundProps) => {
      return (
            <div className={cn(shadowBackgroundVariants({directionTo, variant, layer}), className)}></div>
      )
}
ShadowBackground.displayName = "ShadowBackground"