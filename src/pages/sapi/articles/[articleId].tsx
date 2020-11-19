import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"

type Props = {
  dummy: string
}

const ArticleSAPI = (props: Props): React.ReactElement => {
  return <div>{props.dummy}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [1, 2, 3].map((d) => `/sapi/articles/${d}`)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const articleId = ctx.params?.articleId as string
  if (!articleId.match(/\d+/)) return { notFound: true }

  const props: Props = { dummy: `hello ${articleId}` }
  const revalidate = 60 * 60 // an hour

  return { props, revalidate }
}

export default ArticleSAPI
