const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// This not work
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)

// This work
// module.exports = moduleExports
