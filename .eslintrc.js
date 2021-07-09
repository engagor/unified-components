module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'es6': true,
    },
    'parser': '@typescript-eslint/parser',
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'overrides': [
        {
            'files': ['*.js', '*.jsx'],
            'rules': {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'settings': {
        'react': {
            'version': '17.0.1'
        }
    },
    'plugins': [
        'react',
        'react-hooks',
        'import',
    ],
    'globals': {},
    'rules': {
        'strict': 0,
        'no-useless-escape': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'keyword-spacing': ['error'],
        'linebreak-style': ['error', 'unix'],
        'no-console': ['error', { 'allow': ['info', 'warn', 'error'] }],
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': false,
                'ts-expect-error': 'allow-with-description'
            },
        ],
        '@typescript-eslint/camelcase': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'eol-last': 2,
        'object-curly-spacing': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
    }
};
