module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
