import { useSearchParams as useReactRouterSearchParams } from 'react-router'

/**
 * Universal useSearchParams hook for web
 * Returns URLSearchParams and setter function
 */
export function useSearchParams(): [URLSearchParams, (nextInit: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams), navigateOptions?: any) => void] {
  return useReactRouterSearchParams()
}