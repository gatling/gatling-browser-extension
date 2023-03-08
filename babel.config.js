module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false
      }
    ],
    "@babel/react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/transform-regenerator",
    "@babel/syntax-dynamic-import",
    [
    ]
  ],
  env: {
    test: {
      presets: ["@babel/env"]
    }
  }
};
