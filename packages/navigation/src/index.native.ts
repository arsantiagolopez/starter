/**
 * Universal Navigation Package - React Native Platform
 * Adapts Expo Router to React Router 7 API
 */

// Components
export { Link } from './link.native'

// Hooks
export { useNavigate } from './hooks/use-navigate.native'
export { useLocation } from './hooks/use-location.native'
export { useParams } from './hooks/use-params.native'
export { useSearchParams } from './hooks/use-search-params.native'

// Types (same for both platforms)
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