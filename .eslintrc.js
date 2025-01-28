module.exports = {
  root: true,
  extends: ["eslint:recommended", "expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",

    // code quality rules
    "no-unused-vars": "warn",
    "no-console": "warn",
    "import/no-unresolved": "error",
    "react/jsx-key": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
