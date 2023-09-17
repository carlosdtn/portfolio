const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF
  }
};
