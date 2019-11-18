module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb', 'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      "required": {
        "some": [ "nesting", "id" ]
    }
    }]
  },
};
