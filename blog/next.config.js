// next.config.js
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
        "@mdx-js/loader",
      ],
    });
    return config;
  },
});
