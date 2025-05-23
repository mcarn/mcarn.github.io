// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "consistent",
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  endOfLine: "lf",
  arrowParens: "always",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  tailwindFunctions: ["tv"],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
