import { useGlobalSearchParams, useRouter } from 'expo-router'
import { useCallback, useMemo } from 'react'

/**
 * Universal useSearchParams hook for React Native
 * Adapts Expo Router to match React Router's URLSearchParams API
 */
export function useSearchParams(): [URLSearchParams, (nextInit: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams), navigateOptions?: any) => void] {
  const searchParams = useGlobalSearchParams()
  const router = useRouter()
  
  // Create URLSearchParams-like object from Expo's search params
  const urlSearchParams = useMemo(() => {
    const params = new URLSearchParams()
    Object.entries(searchParams || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, String(value))
      }
    })
    return params
  }, [searchParams])
  
  // Setter function that navigates with new search params
  const setSearchParams = useCallback((
    nextInit: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams),
    navigateOptions?: any
  ) => {
    const newParams = typeof nextInit === 'function' 
      ? nextInit(urlSearchParams)
      : nextInit
    
    // Convert URLSearchParams to query string
    const searchString = newParams.toString()
    const currentPath = '/' // Expo Router doesn't expose pathname easily
    const newPath = searchString ? `${currentPath}?${searchString}` : currentPath
    
    // Navigate to new path with search params
    if (navigateOptions?.replace) {
      router.replace(newPath)
    } else {
      router.push(newPath)
    }
  }, [urlSearchParams, router])
  
  return [urlSearchParams, setSearchParams]
}