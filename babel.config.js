module.exports = {
  presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
  plugins: [
    "babel-plugin-macros",
    ["styled-components", { ssr: true, displayName: true, preprocess: false }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
  ],
};
