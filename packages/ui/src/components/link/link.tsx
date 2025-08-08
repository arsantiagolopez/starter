import * as React from "react"
import { cn } from "../../lib/utils"

// For web, we'll use a simple anchor tag to avoid React Router dependency issues
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <a
        href={href}
        className={cn('text-primary underline-offset-4 hover:underline', className)}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    )
  }
)
Link.displayName = "Link"