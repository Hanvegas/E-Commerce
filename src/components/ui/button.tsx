import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm cursor-pointer",
      {
            variants: {
                  variant: {
                        default: "bg-white border-2 border-white text-black hover:bg-black hover:border-black hover:text-white transition-all duration-300",
                        primary: "bg-[#8900FF] border-2 border-[#8900FF] text-white hover:bg-white hover:border-white hover:text-[#8900FF] transition-all duration-300",
                        primaryOutline: " border-2 border-white text-white hover:text-[#AE4FFF] hover:border-[#AE4FFF] transition-all duration-300",
                        secondary: "bg-[#5B08A2] border-2 border-[#5B08A2] text-white hover:bg-white hover:border-white hover:text-[#5B08A2] transition-all duration-300",
                        secondaryOutline: " border-2 border-white text-white hover:text-[#8426D5] hover:border-[#8426D5] transition-all duration-300",
                        outline: "border border-2 border-white text-white hover:bg-black hover:border-black transition-all duration-300",
                        ghost: "hover:bg-accent hover:text-accent-foreground",
                        link: "text-primary underline-offset-4 hover:underline",
                  },
                  size: {
                        default: "h-10 px-4 py-2",
                        sm: "h-9 rounded-md px-3",
                        lg: "py-2 px-6 text-base md:text-xl",
                        icon: "h-10 w-10",
                  }
            },
            defaultVariants: {
                  variant: "default",
                  size: "default"
            }
      }
)

export interface ButtonProps
      extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
      asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, size, asChild = false, ...props }, ref) => {
            const Comp = asChild ? Slot : "button"
            return (
                  <Comp className={cn(buttonVariants({ variant, size, className }))}
                        ref={ref}
                        {...props}
                  />
            )
      }
)
Button.displayName = "Button"

export { Button, buttonVariants }