// Default platform detection (fallback)
export const isWeb = typeof window !== 'undefined' && typeof document !== 'undefined'
export const isNative = !isWeb