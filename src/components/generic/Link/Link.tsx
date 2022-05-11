import React from 'react'
import NextLink from 'next/link'
// local libs
import { StyledLink } from './styles'
// types
import type { LinkProps } from './types'

export const Link: React.FC<LinkProps> = ({
  children,
  href = '/',
  shallow,
  margin,
  padding,
  color,
  transform,
  ...rest
}) => {
  const commonProps = {
    margin,
    padding,
    color,
    transform,
  }

  return (
    <NextLink href={href} passHref shallow={shallow}>
      <StyledLink {...commonProps} {...rest}>
        {children}
      </StyledLink>
    </NextLink>
  )
}
