/** @type {import('next').NextConfig} */
let assetPrefix='',basePath = ''
if (process.env.GITHUB_ACTIONS || false) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
module.exports = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath:basePath,
  images: {unoptimized: true},
}