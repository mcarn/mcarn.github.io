import eslintPluginAstro from "eslint-plugin-astro"
import eslintConfigPrettier from "eslint-config-prettier"

const base = [eslintConfigPrettier, ...eslintPluginAstro.configs.recommended]

export default base
