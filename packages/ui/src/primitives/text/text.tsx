import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(className)} {...props}>
        {children}
      </span>
    )
  }
)
Text.displayName = 'Text'