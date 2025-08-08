import * as React from 'react'
import { View as RNView, type ViewProps as RNViewProps } from 'react-native'
import { cn } from '../../lib/utils'

export interface ViewProps extends RNViewProps {
  className?: string
  children?: React.ReactNode
}

export const View = React.forwardRef<React.ElementRef<typeof RNView>, ViewProps>(
  ({ className, style, children, ...props }, ref) => {
    return (
      <RNView ref={ref} style={[style]} {...props}>
        {children}
      </RNView>
    )
  }
)
View.displayName = 'View'