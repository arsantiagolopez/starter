import type { VariantProps } from "class-variance-authority"
import type { buttonVariants } from "./variants"

export interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  onPress?: () => void
  disabled?: boolean
}