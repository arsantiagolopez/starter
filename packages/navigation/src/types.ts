import type { ReactNode } from 'react'

/**
 * Universal navigation types that match React Router 7 API
 */

export type To = string | Partial<Path>

export interface Path {
  pathname: string
  search: string
  hash: string
}

export interface NavigateOptions {
  replace?: boolean
  state?: any
  preventScrollReset?: boolean
  relative?: 'route' | 'path'
  unstable_flushSync?: boolean
  unstable_viewTransition?: boolean
}

export type NavigateFunction = {
  (to: To, options?: NavigateOptions): void
  (delta: number): void
}

export interface Location<State = any> {
  pathname: string
  search: string
  hash: string
  state: State
  key: string
}

export interface LinkProps {
  to: To
  replace?: boolean
  state?: any
  preventScrollReset?: boolean
  relative?: 'route' | 'path'
  reloadDocument?: boolean
  unstable_viewTransition?: boolean
  children?: ReactNode
  className?: string
  style?: any
  onClick?: (event: any) => void
  onPress?: () => void // For React Native compatibility
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false'
}

export type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined
}

export interface URLSearchParamsInit {
  [key: string]: string | string[] | undefined
}