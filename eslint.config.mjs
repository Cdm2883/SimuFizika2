import { FlatCompat } from "@eslint/eslintrc";
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import tseslint from 'typescript-eslint';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// noinspection JSCheckFunctionSignatures
const eslintConfig = tseslint.config(
    ...compat.extends("next/core-web-vitals"),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    {
        plugins: {
            '@stylistic': stylistic,
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "comma-spacing": "off",
            "@stylistic/comma-spacing": "error",
            "@stylistic/member-delimiter-style": "error",
            "@stylistic/no-unsafe-declaration-merging": "off",

            "array-bracket-spacing": [ "error", "always" ],
            "arrow-parens": [ "error", "as-needed" ],
            "indent": [ "error", 4, { SwitchCase: 1 } ],
            "object-curly-spacing": [ "error", "always" ],
            "semi": [ "error", "always" ],
            "spaced-comment": [ "error", "always", { markers: [ "/" ] } ],

            "simple-import-sort/imports": "error",
        },
    }
);

export default eslintConfig;
