import * as React from "react"
import { Pressable, Text, type PressableProps, type ViewStyle } from "react-native"
import { buttonVariants } from "./variants"
import type { BaseButtonProps } from "./types"

export interface ButtonProps extends Omit<PressableProps, 'onPress' | 'disabled'>, BaseButtonProps {
  className?: string
  children?: React.ReactNode
}

export const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, onPress, disabled, children, ...props }, ref) => {
    const getStyle = ({ pressed }: { pressed: boolean }): ViewStyle => ({
      opacity: pressed ? 0.7 : disabled ? 0.5 : 1,
    })
    
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        style={getStyle}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text style={{ textAlign: 'center' }}>{children}</Text>
        ) : (
          children
        )}
      </Pressable>
    )
  }
)
Button.displayName = "Button"