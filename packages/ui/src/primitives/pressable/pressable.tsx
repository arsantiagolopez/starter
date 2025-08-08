import * as React from 'react'
import { cn } from '../../lib/utils'

export interface PressableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void
  children?: React.ReactNode
}

export const Pressable = React.forwardRef<HTMLButtonElement, PressableProps>(
  ({ className, onPress, onClick, children, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn('cursor-pointer', className)}
        onClick={onPress || onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Pressable.displayName = 'Pressable'