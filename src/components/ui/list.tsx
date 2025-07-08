import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const listVariants = cva(
      "",
      {
            variants: {
                  hoverVariant: {
                        default: "",
                        left: "cursor-pointer relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-50"
                  },
                  size: {
                        default: "text-lg",
                        small: "text-md",
                        large: "text-xl"
                  }
            },
            defaultVariants: {
                  hoverVariant: "default",
                  size: "default"
            }
      }
)

export interface ListProps extends
      React.LiHTMLAttributes<HTMLLIElement>,
      VariantProps<typeof listVariants> {
      asChild?: boolean
      className?: string
}

export const List = React.forwardRef<HTMLLIElement, ListProps>(
      ({ hoverVariant, size, className, asChild = false, ...props }, ref) => {
            const Comp = asChild ? Slot : "li"
            return (
                  <Comp className={cn(listVariants({ size, className }))} ref={ref} {...props} />
            )
      }
)

List.displayName = "List"