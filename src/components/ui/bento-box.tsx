import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const bentoBoxVariants = cva(
      "flex justify-center items-center",
      {
            variants: {
                  color: {
                        default: "bg-primary-500",
                        none: "bg-transparent"
                  },
                  col: {
                        1: "col-span-1",
                        2: "col-span-2",
                        3: "col-span-3",
                        4: "col-span-4",
                        5: "col-span-5",
                        6: "col-span-6",
                        7: "col-span-7",
                        8: "col-span-8",
                        9: "col-span-9",
                        10: "col-span-10",
                        11: "col-span-11",
                        12: "col-span-12",
                  },
                  row: {
                        1: "row-span-1",
                        2: "row-span-2",
                        3: "row-span-3",
                        4: "row-span-4",
                        5: "row-span-5",
                        6: "row-span-6",
                        7: "row-span-7",
                        8: "row-span-8",
                        9: "row-span-9",
                        10: "row-span-10",
                        11: "row-span-11",
                        12: "row-span-12",
                  },
                  rounded: {
                        sm: "rounded-sm",
                        md: "rounded-md",
                        lg: "rounded-lg",
                        xl: "rounded-xl",
                        full: "rounded-full"
                  }
            },
            defaultVariants: {
                  color: "default",
                  col: 6,
                  row: 6,
                  rounded: "xl"
            }
      }
)

interface BentoBoxProps extends
      VariantProps<typeof bentoBoxVariants> {
      children?: ReactNode
      className?: string
}

export const BentoBox = ({ color, col, row, rounded, children, className }: BentoBoxProps) => {
      return (
            <div className={cn(bentoBoxVariants({ color, col, row, rounded }), className)}>
                  {children}
            </div>
      )
}
BentoBox.displayName = "BentoBox"