import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import type { NavigateFunction, NavigateOptions, To } from '../types'

/**
 * Universal useNavigate hook for React Native
 * Adapts Expo Router's useRouter to match React Router's navigate API
 */
export function useNavigate(): NavigateFunction {
  const router = useRouter()
  
  const navigate: NavigateFunction = useCallback((
    toOrDelta: To | number,
    options?: NavigateOptions
  ) => {
    // Handle numeric navigation (go back/forward)
    if (typeof toOrDelta === 'number') {
      if (toOrDelta < 0) {
        // Go back
        for (let i = 0; i < Math.abs(toOrDelta); i++) {
          router.back()
        }
      } else if (toOrDelta > 0) {
        // Expo Router doesn't have a forward method
        // This is a platform limitation
        console.warn('Forward navigation is not supported in Expo Router')
      }
      return
    }
    
    // Handle path navigation
    const path = typeof toOrDelta === 'string' 
      ? toOrDelta 
      : (() => {
          const { pathname = '/', search = '', hash = '' } = toOrDelta
          return `${pathname}${search}${hash}`
        })()
    
    // Apply navigation options
    if (options?.replace) {
      router.replace(path)
    } else {
      router.push(path)
    }
    
    // Note: Expo Router doesn't support all React Router options:
    // - state: Not directly supported, would need global state management
    // - preventScrollReset: Not applicable in React Native
    // - relative: Expo Router handles paths differently
    // - unstable_flushSync: Not applicable
    // - unstable_viewTransition: Not applicable
    
    if (options?.state) {
      console.warn('Navigation state is not directly supported in Expo Router. Consider using global state management.')
    }
  }, [router])
  
  return navigate
}