module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
  ],

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect',
      flowVersion: '0.53', // Flow version
    },

    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],

    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],

    'import/resolver': {
      typescript: {},

      alias: {
        map: [
          ['@atoms', './src/components/atoms'],
          ['@molecules', './src/components/molecules'],
          ['@organisms', './src/components/organisms'],
          ['@templates', './src/components/templates'],
          ['@providers', './src/components/providers'],
          ['@pages', './src/components/pages'],
          ['@hooks', './src/core/hooks'],
          ['@types', './src/types'],
          ['@helpers', './src/helpers'],
          ['@stores', './src/core/stores'],
          ['@styles', './src/styles'],
          ['@constants', './src/constants'],
          ['@assets', './src/assets'],
          ['@contexts', './src/core/contexts'],
        ],

        extensions: ['.ts', '.tsx', '.js', '.cjs', '.jsx', '.json'],
      },
    },
  },

  ignorePatterns: [
    'node_modules/',
    'webapp/',
    'build/',
    'dist/',
    'src/vite-env.d.ts',
  ],

  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'arrow-body-style': 'off',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'String',
      'Boolean',
      'Undefined',
    ],
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-debugger': 'warn',
    'no-duplicate-imports': 0,
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['off'],
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'spaced-comment': 'error',
    radix: 'error',
    'import/export': 0,
    'import/no-cycle': 2,
    'import/no-duplicates': 2,
    'react/react-in-jsx-scope': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],

      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
