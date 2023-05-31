module.exports = {
  printWidth: 80,
  singleQuote: false,
  semi: false,
  proseWrap: "never",
  jsxSingleQuote: false,
  arrowParens: "always",
  htmlWhitespaceSensitivity: "strict",
  overrides: [
    {
      files: [".prettierrc.cjs", "*.ts", "*.tsx"],
    },
  ],
}
