import * as React from "react"
import { cn } from "../../lib/utils"
import { buttonVariants } from "./variants"
import type { BaseButtonProps } from "./types"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onPress, onClick, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onPress || onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"