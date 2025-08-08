import { useParams as useReactRouterParams } from 'react-router'
import type { Params } from '../types'

/**
 * Universal useParams hook for web
 * Returns route parameters
 */
export function useParams<Key extends string = string>(): Params<Key> {
  return useReactRouterParams<Key>() as Params<Key>
}