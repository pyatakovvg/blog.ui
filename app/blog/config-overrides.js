
const { override, addDecoratorsLegacy, setWebpackOptimizationSplitChunks, addWebpackPlugin } = require('customize-cra');
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");


module.exports = override(
  addDecoratorsLegacy(),
  setWebpackOptimizationSplitChunks({
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      reactVendor: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        name: 'react.vendor',
      },
      mobxVendor: {
        test: /[\\/]node_modules[\\/](mobx|mobx-react|dumba)[\\/]/,
        name: 'mobx.vendor',
      },
      libraryVendor: {
        test: /[\\/](library)[\\/](kit|design|app)[\\/]/,
        name: 'library.vendor',
      },
      helperVendor: {
        test: /[\\/](helpers)[\\/](utils|moment|numeral)[\\/]/,
        name: 'helper.vendor',
      },
      kernelVendor: {
        test: /[\\/](library)[\\/](kernel)[\\/]/,
        name: 'kernel.vendor',
      },
    },
  }),
  addWebpackPlugin(new WorkboxWebpackPlugin.InjectManifest({
    swSrc: "@library/workbox",
    swDest: "service-worker.js",
  })),
);
