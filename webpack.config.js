const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dev.bundle.js",
  },
  rules: [
    {
      loader: "babel-loader",
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
      options: {
        rootMode: "upward",
      },
    },
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
