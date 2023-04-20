import { ThemeProvider } from '@emotion/react'
import { mainTheme } from '../../utils/Pallete'

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={mainTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
