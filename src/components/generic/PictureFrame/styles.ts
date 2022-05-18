import styled from '@emotion/styled'
// types
import {
  PictureFrameSizes,
  PictureFrameVariants,
  PictureFrameProps,
} from './types'

export const PictureFrameContainer = styled.div<PictureFrameProps>`
  height: ${({ size, height }) =>
    height
      ? `${height}`
      : size === PictureFrameSizes.s
      ? '405px'
      : size === PictureFrameSizes.m
      ? '475px'
      : '546px'};
  width: ${({ size, width }) =>
    width
      ? `${width}`
      : size === PictureFrameSizes.s
      ? '300px'
      : size === PictureFrameSizes.m
      ? '352px'
      : '405px'};

  margin: ${({ margin }) => (margin ? `${margin}` : null)};

  background: ${({ theme }) => theme.colors.basicLight};
  border-radius: ${({ variant }) =>
    variant === PictureFrameVariants.arched ? '203px 203px 0px 0px' : 'null'};

  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : null};
  background-size: cover;
  background-position: center;

  &::after {
    ${({ withDecorativeElement }) =>
      withDecorativeElement
        ? `
      content: '';
      display: block;
      border: 2px solid;
      `
        : null};

    height: ${({ size }) =>
      size === PictureFrameSizes.m
        ? '405px'
        : size === PictureFrameSizes.l
        ? '475px'
        : null};
    width: ${({ size }) =>
      size === PictureFrameSizes.m
        ? '300px'
        : size === PictureFrameSizes.l
        ? '352px'
        : null};

    border-radius: ${({ size }) =>
      size === PictureFrameSizes.m
        ? '203px 203px 0 0'
        : size === PictureFrameSizes.l
        ? '238px 238px 0 0'
        : null};
    border-color: ${({ theme, withDecorativeElement }) =>
      withDecorativeElement ? theme.colors.accent[100] : null};

    margin: -35px 0px 0px 100px;
  }
`
