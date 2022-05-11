import styled from '@emotion/styled'
// types
import { StyledLinkProps } from './types'

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-block;

  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.textColors.basic)};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: ${({ transform }) => (transform ? transform : 'uppercase')};

  ${({ margin }) => (!margin ? null : `margin: ${margin}`)};
  ${({ padding }) => (!padding ? null : `padding: ${padding}`)};

  cursor: pointer;

  transition: font-size 1.5s;

  &:hover {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`
