import styled from '@emotion/styled'

export const FirstScreenContainer = styled.div`
  width: 1280px;
  padding: 0px 10px;

  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FirstScreenBackground = styled.div`
  width: 100%;
  min-height: 100vh;

  position: fixed;
  z-index: -10;
  top: 0px;

  background-image: url('images/radial-gradient.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 50% -15%;
  opacity: 0.9;
  filter: blur(100px);
`

export const FirstScreenTitle = styled.div`
  width: 580px;

  font-family: ${({ theme }) => theme.fontFamily.serif};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.textColors.accent};
  text-shadow: ${({ theme }) => theme.shadows.basic};
`

export const FirstScreenText = styled.div`
  width: 320px;

  font-family: ${({ theme }) => theme.fontFamily.serif};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColors.basic};
`

export const FirstScreenPictureBlock = styled.div`
  position: fixed;
  z-index: -8;
  left: 520px;
  top: 250px;

  display: flex;
  width: 100%;
  //justify-content: center;
  align-items: center;
  //align-self: center;
`

export const PictureInfoBlock = styled.div`
  color: ${({ theme }) => theme.textColors.basic};
  align-self: flex-end;
`

export const PictureInfo = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.sansSerif};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  letter-spacing: 1px;

  &:first-of-type::after {
    content: '';
    display: block;
    background-color: #ffffff;
    height: 0.5px;
    width: 242px;
  }
`

export const PictureTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.serif};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 400;
  letter-spacing: 2px;
`
