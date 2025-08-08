import * as React from 'react'
import { Link as ExpoLink, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'
import type { LinkProps, To } from './types'

/**
 * Universal Link component for React Native using Expo Router
 * Adapts React Router API ('to' prop) to Expo Router ('href' prop)
 */
const LinkBase = React.forwardRef<any, LinkProps>(
  ({ 
    to, 
    replace, 
    state,
    children,
    className,
    style,
    onPress,
    ...props 
  }, ref) => {
    // Convert To type to href string for Expo Router
    const href = React.useMemo(() => {
      if (typeof to === 'string') {
        return to
      }
      // Construct URL from Path object
      const { pathname = '/', search = '', hash = '' } = to
      return `${pathname}${search}${hash}`
    }, [to])
    
    // Expo Router doesn't support state in Link, we'll handle this in navigation hooks
    // For now, we'll use the basic Expo Link with adapted props
    
    // If children is a string, wrap in Text for React Native
    const content = typeof children === 'string' ? (
      <Text style={style}>{children}</Text>
    ) : (
      children
    )
    
    return (
      <ExpoLink 
        href={href} 
        replace={replace}
        asChild
        {...props}
      >
        <Pressable ref={ref} onPress={onPress} style={typeof style === 'function' ? undefined : style}>
          {content}
        </Pressable>
      </ExpoLink>
    )
  }
)

LinkBase.displayName = 'Link'

/**
 * Back navigation component for React Native
 */
const LinkBack = React.forwardRef<any, Omit<LinkProps, 'to'>>(
  ({ children = '← Back', onPress, style, className, ...props }, ref) => {
    const router = useRouter()
    
    const handlePress = () => {
      if (onPress) onPress()
      router.back()
    }
    
    const content = typeof children === 'string' ? (
      <Text style={style}>{children}</Text>
    ) : (
      children
    )
    
    return (
      <Pressable 
        ref={ref} 
        onPress={handlePress}
        style={typeof style === 'function' ? undefined : style}
        {...props}
      >
        {content}
      </Pressable>
    )
  }
)

LinkBack.displayName = 'Link.Back'

/**
 * Forward navigation component for React Native
 * Note: Expo Router doesn't have a forward method, this will log a warning
 */
const LinkForward = React.forwardRef<any, Omit<LinkProps, 'to'>>(
  ({ children = 'Forward →', onPress, style, className, ...props }, ref) => {
    
    const handlePress = () => {
      if (onPress) onPress()
      console.warn('Forward navigation is not supported in Expo Router')
    }
    
    const content = typeof children === 'string' ? (
      <Text style={[style, { opacity: 0.5 }]}>{children}</Text>
    ) : (
      children
    )
    
    return (
      <Pressable 
        ref={ref} 
        onPress={handlePress}
        style={typeof style === 'function' ? undefined : style}
        {...props}
      >
        {content}
      </Pressable>
    )
  }
)

LinkForward.displayName = 'Link.Forward'

// Export with sub-components
export const Link = Object.assign(LinkBase, {
  Back: LinkBack,
  Forward: LinkForward
})