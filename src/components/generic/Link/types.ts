import { CSSIndent } from 'src/types'

export type LinkProps = React.ComponentPropsWithoutRef<'a'> &
  StyledLinkProps & {
    href?: string
    shallow?: boolean
  }

export type StyledLinkProps = {
  margin?: CSSIndent
  padding?: CSSIndent
  color?: string
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}
