/**
 * Universal Navigation Package - Web Platform
 * Provides React Router 7 API for navigation
 */

// Components
export { Link } from './link'

// Hooks
export { useNavigate } from './hooks/use-navigate'
export { useLocation } from './hooks/use-location'
export { useParams } from './hooks/use-params'
export { useSearchParams } from './hooks/use-search-params'

// Types
export type {
  To,
  Path,
  NavigateOptions,
  NavigateFunction,
  Location,
  LinkProps,
  Params,
  URLSearchParamsInit
} from './types'