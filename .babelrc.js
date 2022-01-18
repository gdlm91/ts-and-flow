module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
  overrides: [
    {
      test: /\.(js|jsx)$/,
      presets: ["@babel/preset-flow"],
    },
    {
      test: /\.(ts|tsx)$/,
      presets: ["@babel/preset-typescript"],
    },
  ],
};
