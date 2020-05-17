module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['prettier', 'svelte3'],
  rules: {
    'prettier/prettier': 'error',
    'svelte3/lint-template': 2,
  },
}
