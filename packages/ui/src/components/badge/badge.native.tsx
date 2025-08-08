import * as React from "react"
import { View, Text, type ViewProps } from "react-native"
import { type VariantProps } from "class-variance-authority"
import { badgeVariants } from "./variants"

export interface BadgeProps
  extends ViewProps,
    VariantProps<typeof badgeVariants> {
  className?: string
  children?: React.ReactNode
}

function Badge({ className, variant, style, children, ...props }: BadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: '#f3f4f6',
          borderColor: 'transparent',
        }
      case 'destructive':
        return {
          backgroundColor: '#ef4444',
          borderColor: 'transparent',
        }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: '#e5e7eb',
        }
      default:
        return {
          backgroundColor: '#3b82f6',
          borderColor: 'transparent',
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <View 
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 9999,
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 2,
          ...variantStyles,
        },
        style
      ]} 
      {...props}
    >
      {typeof children === 'string' ? (
        <Text style={{ 
          fontSize: 12, 
          fontWeight: '600',
          color: variant === 'outline' ? '#000' : '#fff' 
        }}>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  )
}

export { Badge }