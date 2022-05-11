import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

export const globalStyles = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital,wght@0,400;0,700;1,400&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
      ${emotionNormalize}

      html,
      body {
        padding: 0;
        margin: 0;
        background: #1e3b29;
        min-height: 100vh;
        line-height: 1.5;
        scroll-behavior: smooth;
      }

      html,
      body,
      button,
      input,
      textarea {
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)
