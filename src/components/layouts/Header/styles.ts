import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.indents.l};

  display: flex;
  justify-content: center;

  font-family: ${({ theme }) => theme.fontFamily.sansSerif};
`

export const HeaderWrapper = styled.div`
  width: 1280px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  color: ${({ theme }) => theme.textColors.basic};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
`
