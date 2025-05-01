import eslintPluginAstro from "eslint-plugin-astro"
import stylistic from "@stylistic/eslint-plugin"
import unusedImports from "eslint-plugin-unused-imports"
import eslintConfigPrettier from "eslint-config-prettier/flat"

const base = [
  {
    plugins: {
      "@stylistic": stylistic,
      "unused-imports": unusedImports,
    },
    rules: {
      "indent": ["error", 2],
      "@stylistic/indent": ["error", 2],
      "eol-last": "off",
      "jsx-quotes": ["warn", "prefer-double"],
      "quotes": ["warn", "double"],
      "semi": ["warn", "never"],
      "@stylistic/js/no-tabs": "off",
      "@stylistic/ts/indent": "off",
      "no-constant-binary-expression": "warn",
      "no-debugger": "warn",
      "no-extend-native": "off",
      "no-trailing-spaces": "warn",
      "space-before-function-paren": "off",
      "antfu/if-newline": "off",
      "antfu/top-level-function": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/js/multiline-ternary": "off",
      "n/prefer-global/process": "off",
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "object-curly-newline": [
        "warn",
        {
          consistent: true,
          multiline: true,
        },
      ],
      "object-curly-spacing": ["warn", "always"],
      "array-element-newline": ["warn", "consistent"],
      "array-bracket-newline": ["warn", "consistent"],
      "astro/no-conflict-set-directives": "warn",
      "astro/no-unused-define-vars-in-style": "warn",
      "astro/no-unused-css-selector": "off",
      "astro/prefer-class-list-directive": "warn",
      "astro/semi": ["warn", "never"],
      "astro/jsx-a11y/anchor-is-valid": "warn",
    },
  },
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
]

export default base
