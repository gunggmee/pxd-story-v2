import Head from "next/head"
import React from "react"

type Props = {
  children: React.ReactElement[] | React.ReactElement
  title?: string
}

const Layout = ({ children, title }: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | pxd Story` : "pxd Story"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </>
  )
}

export default Layout
