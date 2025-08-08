import { useLocalSearchParams } from 'expo-router'
import type { Params } from '../types'

/**
 * Universal useParams hook for React Native
 * Uses Expo Router's useLocalSearchParams for route parameters
 */
export function useParams<Key extends string = string>(): Params<Key> {
  // Expo Router combines route params and search params
  // We'll use useLocalSearchParams which includes both
  const params = useLocalSearchParams<Record<Key, string>>()
  return params as Params<Key>
}