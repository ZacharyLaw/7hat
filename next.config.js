/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}