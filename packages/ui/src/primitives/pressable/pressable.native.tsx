import * as React from 'react'
import { Pressable as RNPressable, type PressableProps as RNPressableProps, type ViewStyle } from 'react-native'

export interface PressableProps extends RNPressableProps {
  className?: string
  children?: React.ReactNode
}

export const Pressable = React.forwardRef<React.ElementRef<typeof RNPressable>, PressableProps>(
  ({ className, style, children, ...props }, ref) => {
    return (
      <RNPressable ref={ref} style={style as ViewStyle} {...props}>
        {children}
      </RNPressable>
    )
  }
)
Pressable.displayName = 'Pressable'