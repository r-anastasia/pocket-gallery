import { CSSIndent } from 'src/types'

import React from 'react'

export enum PictureFrameSizes {
  s = 's',
  m = 'm',
  l = 'l',
}

export enum PictureFrameVariants {
  rectangle = 'rectangle',
  arched = 'arched',
}

export type PictureFrameProps = React.ComponentPropsWithoutRef<'div'> & {
  size: keyof typeof PictureFrameSizes
  variant: keyof typeof PictureFrameVariants
  backgroundImage?: string
  withDecorativeElement?: boolean
  width?: string
  height?: string
  margin?: CSSIndent
}
