import { ThemeProvider } from '@emotion/react'
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next'
// local libs
import { globalStyles, theme } from 'src/theme'
import { Header } from 'src/components/layouts/Header'
// types
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Header />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
