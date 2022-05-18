// local libs
import { PictureFrameContainer } from './styles'
// types
import type { PictureFrameProps } from './types'
import { PictureFrameSizes, PictureFrameVariants } from './types'

export const PictureFrame = ({
  size = PictureFrameSizes.m,
  variant = PictureFrameVariants.arched,
  ...rest
}: PictureFrameProps) => {
  return <PictureFrameContainer size={size} variant={variant} {...rest} />
}
