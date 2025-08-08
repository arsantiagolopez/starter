import { usePathname, useGlobalSearchParams } from 'expo-router'
import { useMemo } from 'react'
import type { Location } from '../types'

/**
 * Universal useLocation hook for React Native
 * Constructs a React Router-like location object from Expo Router hooks
 */
export function useLocation<State = any>(): Location<State> {
  const pathname = usePathname()
  const searchParams = useGlobalSearchParams()
  
  const location = useMemo(() => {
    // Convert search params to search string
    const searchEntries = Object.entries(searchParams || {})
    const search = searchEntries.length > 0
      ? '?' + searchEntries
          .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
          .join('&')
      : ''
    
    return {
      pathname,
      search,
      hash: '', // Expo Router doesn't support hash navigation
      state: null as State, // Expo Router doesn't have built-in state
      key: pathname // Use pathname as key since Expo doesn't provide one
    }
  }, [pathname, searchParams])
  
  return location
}