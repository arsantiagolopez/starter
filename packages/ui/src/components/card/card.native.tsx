import * as React from "react"
import { View, Text, type ViewProps, type TextProps } from "react-native"

interface CardProps extends ViewProps {
  className?: string
  children?: React.ReactNode
}

const Card = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, style, children, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        {
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#e5e5e5',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 2,
        },
        style
      ]}
      {...props}
    >
      {children}
    </View>
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, style, children, ...props }, ref) => (
    <View
      ref={ref}
      style={[{ padding: 24 }, style]}
      {...props}
    >
      {children}
    </View>
  )
)
CardHeader.displayName = "CardHeader"

interface CardTextProps extends TextProps {
  className?: string
  children?: React.ReactNode
}

const CardTitle = React.forwardRef<React.ElementRef<typeof Text>, CardTextProps>(
  ({ className, style, children, ...props }, ref) => (
    <Text
      ref={ref}
      style={[
        {
          fontSize: 24,
          fontWeight: '600',
          lineHeight: 28,
        },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<React.ElementRef<typeof Text>, CardTextProps>(
  ({ className, style, children, ...props }, ref) => (
    <Text
      ref={ref}
      style={[
        {
          fontSize: 14,
          color: '#6b7280',
        },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, style, children, ...props }, ref) => (
    <View 
      ref={ref} 
      style={[{ paddingHorizontal: 24, paddingBottom: 24 }, style]} 
      {...props}
    >
      {children}
    </View>
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, style, children, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        { 
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingBottom: 24
        },
        style
      ]}
      {...props}
    >
      {children}
    </View>
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }