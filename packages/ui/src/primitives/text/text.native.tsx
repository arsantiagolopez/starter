import * as React from 'react'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'
import { cn } from '../../lib/utils'

export interface TextProps extends RNTextProps {
  className?: string
  children?: React.ReactNode
}

export const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, style, children, ...props }, ref) => {
    return (
      <RNText ref={ref} style={[style]} {...props}>
        {children}
      </RNText>
    )
  }
)
Text.displayName = 'Text'