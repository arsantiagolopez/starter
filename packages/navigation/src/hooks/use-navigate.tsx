import { useNavigate as useReactRouterNavigate } from 'react-router'
import type { NavigateFunction } from '../types'

/**
 * Universal useNavigate hook for web
 * Returns the standard React Router navigate function
 */
export function useNavigate(): NavigateFunction {
  return useReactRouterNavigate()
}