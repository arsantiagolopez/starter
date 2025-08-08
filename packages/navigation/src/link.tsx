import * as React from 'react'
import { Link as ReactRouterLink, useNavigate } from 'react-router'
import type { LinkProps, To } from './types'

/**
 * Universal Link component for web using React Router 7
 * Maintains React Router API with 'to' prop
 */
const LinkBase = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    to, 
    replace, 
    state, 
    preventScrollReset,
    relative,
    reloadDocument,
    unstable_viewTransition,
    children,
    className,
    style,
    onClick,
    ...props 
  }, ref) => {
    // Convert To type to string for React Router
    const href = typeof to === 'string' ? to : (to.pathname || '/')
    
    // Filter out props that might not be supported in all React Router versions
    const linkProps: any = {
      ref,
      to: href,
      replace,
      state,
      preventScrollReset,
      relative,
      reloadDocument,
      className,
      style,
      onClick,
      ...props
    }
    
    // Add unstable props only if defined
    if (unstable_viewTransition !== undefined) {
      linkProps.unstable_viewTransition = unstable_viewTransition
    }
    
    return (
      <ReactRouterLink {...linkProps}>
        {children}
      </ReactRouterLink>
    )
  }
)

LinkBase.displayName = 'Link'

/**
 * Back navigation component - goes back in history
 */
const LinkBack = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
  ({ children = '← Back', onClick, className, style, ...props }, ref) => {
    const navigate = useNavigate()
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (onClick) onClick(e)
      navigate(-1)
    }
    
    return (
      <a
        ref={ref}
        href="#"
        onClick={handleClick}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </a>
    )
  }
)

LinkBack.displayName = 'Link.Back'

/**
 * Forward navigation component - goes forward in history
 */
const LinkForward = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
  ({ children = 'Forward →', onClick, className, style, ...props }, ref) => {
    const navigate = useNavigate()
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (onClick) onClick(e)
      navigate(1)
    }
    
    return (
      <a
        ref={ref}
        href="#"
        onClick={handleClick}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </a>
    )
  }
)

LinkForward.displayName = 'Link.Forward'

// Export with sub-components
export const Link = Object.assign(LinkBase, {
  Back: LinkBack,
  Forward: LinkForward
})