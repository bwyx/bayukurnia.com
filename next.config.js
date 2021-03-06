const { withContentlayer } = require('next-contentlayer')
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/**
 * @type {import('next').NextConfig}
 */
module.exports = withVanillaExtract(
  withContentlayer()({
    reactStrictMode: true
  })
)
