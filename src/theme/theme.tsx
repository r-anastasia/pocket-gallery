const colors = {
  basic: '#1E3B29',
  basicLight: '#E8E2D6',
  accent: {
    200: '#FFFFFF',
    100: '#DC482A',
  },
} as const

const textColors = {
  basic: '#FFFFFF',
  inverted: '#1E3B29',
  accent: '#DC482A',
} as const

const fontSize = {
  xxs: '10px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '42px',
  xl: '80px',
  xxl: '140px',
} as const

const fontFamily = {
  sansSerif: 'Montserrat, sans-serif',
  serif: 'Bona Nova, serif',
} as const

const shadows = {
  basic: '4px 4px 5px rgba(0, 0, 0, 0.3)',
} as const

const indents = {
  xxs: '10px',
  xs: '20px',
  s: '30px',
  m: '40px',
  l: '60px',
} as const

export const theme = {
  colors,
  textColors,
  fontSize,
  fontFamily,
  shadows,
  indents,
}
