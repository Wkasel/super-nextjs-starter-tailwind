/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");
const path = require("path");
const withImages = require("next-images");

module.exports = withPlugins(
  [
    [withImages, { exclude: path.resolve(__dirname, "src/ui/assets/svg") }],
    [
      withBundleAnalyzer,
      {
        poweredByHeader: false,
        trailingSlash: true,
        basePath: "",
        // The starter code load resources from `public` folder with `router.basePath` in React components.
        // So, the source code is "basePath-ready".
        // You can remove `basePath` if you don't need it.
        reactStrictMode: false,
      },
    ],
    [withCustomBabelConfigFile],
  ],
  {
    // webpack5: false,
    babelConfigFile: path.resolve("./babel.config.js"),
    images: {
      domains: ["s3-alpha-sig.figma.com"],
    },
  }
);
