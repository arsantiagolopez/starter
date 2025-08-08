import * as React from "react"
import { Pressable, Text, type PressableProps, type ViewStyle } from "react-native"

export interface LinkProps extends Omit<PressableProps, 'onPress'> {
  href: string
  className?: string
  children: React.ReactNode
  replace?: boolean
}

export const Link = React.forwardRef<React.ElementRef<typeof Pressable>, LinkProps>(
  ({ href, className, children, replace, ...props }, ref) => {
    const handlePress = React.useCallback(() => {
      // For now, just show an alert - can be enhanced with actual navigation
      alert(`Navigate to: ${href}`)
    }, [href])
    
    const getStyle = ({ pressed }: { pressed: boolean }): ViewStyle => ({
      opacity: pressed ? 0.7 : 1,
    })
    
    return (
      <Pressable
        onPress={handlePress}
        style={getStyle}
        ref={ref}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text style={{ 
            color: '#3b82f6',
            textDecorationLine: 'underline'
          }}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    )
  }
)
Link.displayName = "Link"