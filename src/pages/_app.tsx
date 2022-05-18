import { ThemeProvider } from '@emotion/react'
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next'
// local libs
import { globalStyles, theme } from 'src/theme'
// types
import type { AppProps } from 'next/app'
import { BaseLayout } from 'src/components/layouts/BaseLayout'

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
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
