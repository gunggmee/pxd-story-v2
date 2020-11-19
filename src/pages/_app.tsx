import type { AppProps } from "next/app"
import React from "react"
import "styles/base.scss"

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />
}

export default App
