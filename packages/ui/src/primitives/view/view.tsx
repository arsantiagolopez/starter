import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    )
  }
)
View.displayName = 'View'