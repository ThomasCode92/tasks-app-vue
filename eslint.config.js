import globals from "globals";
import tseslint from "typescript-eslint";

import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.ts", "**/*.vue"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...eslintPluginVue.configs["flat/recommended"],
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      // custom rules
    },
  },
  {
    extends: [eslintPluginPrettierRecommended],
    rules: { "prettier/prettier": "warn" },
  },
);
