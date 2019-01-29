module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'camelcase': 'off',
    'no-useless-call': 'off',
    'no-implied-eval': 'off',
    'no-eval': 'off',
    'no-empty-function': 'off',
    'no-new-func': 'off'
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
// https://eslint.org/docs/user-guide/configuring
