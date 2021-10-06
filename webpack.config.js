const path = require("path");

module.exports = {
  devtool: "eval-source-map", // source-map for production
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  // Resolve imports
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development", // "production"
};
