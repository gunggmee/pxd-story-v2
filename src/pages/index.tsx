import Layout from "components/Layout"
import { GetStaticProps } from "next"
import React from "react"

const IndexPage = (): React.ReactElement => {
  return (
    <Layout>
      <p>안녕하세요 Hello</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default IndexPage
