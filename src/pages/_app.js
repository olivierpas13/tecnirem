import { ThemeProvider } from '@emotion/react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { mainTheme } from '../../utils/Pallete'

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={mainTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
