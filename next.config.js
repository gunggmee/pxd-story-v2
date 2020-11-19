const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
const path = require("path")

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
})
