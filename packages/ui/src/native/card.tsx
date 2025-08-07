import * as React from "react"
import { View, ViewProps } from "react-native"
import { cn } from "../lib/utils"

const Card = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        "rounded-lg border bg-card shadow-sm",
        className
      )}
      style={style}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      style={style}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("p-6 pt-0", className)}
      style={style}
      {...props}
    />
  )
)
CardContent.displayName = "CardContent"

const CardTitle = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      style={style}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      style={style}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef<View, ViewProps>(
  ({ className, style, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      style={style}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }