import { useLocation as useReactRouterLocation } from 'react-router'
import type { Location } from '../types'

/**
 * Universal useLocation hook for web
 * Returns the current location object
 */
export function useLocation<State = any>(): Location<State> {
  return useReactRouterLocation() as Location<State>
}