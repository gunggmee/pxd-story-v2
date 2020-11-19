import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import fs from "fs/promises"
import path from "path"

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
  if (!articleId.match(/^\d+$/)) return { notFound: true }

  const props: Props = { dummy: `hello ${articleId}` }
  const revalidate = 60 * 60 // an hour

  const jsonPath = path.join(process.cwd(), "public", "sapi", "articles")
  fs.mkdir(jsonPath, { recursive: true })
  await fs.writeFile(path.join(jsonPath, `${articleId}.json`), JSON.stringify(props))

  return { props, revalidate }
}

export default ArticleSAPI
