module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/base",
        "plugin:prettier/recommended"
    ],
    plugins: ["vue", "prettier"],
    rules: {
        semi: [2, "never"],
        "no-console": "off",
        "vue/max-attributes-per-line": "off",
        "prettier/prettier": ["error", {semi: false}]
    }
}