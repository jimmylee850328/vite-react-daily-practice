module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        "indent": [
            "error",
            4
        ],
        semi: ['error', 'always'],
        "dot-notation": "error",
        "array-bracket-newline": [
            "error",
            {
                "multiline": true 
            }
        ],
        "no-multiple-empty-lines": [
            1, {
                "max": 2 
            }
        ],
        "brace-style": [
            2, "1tbs", {
                "allowSingleLine": true 
            }
        ],
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        'comma-spacing': [
            'error', {
                'after': true 
            }
        ],
        "key-spacing": [
            "error", {
                "beforeColon": false,
                "afterColon": true,
            }
        ],
        "object-curly-spacing": ["error", "always"],
        'object-property-newline': [
            'error', {
                allowAllPropertiesOnSameLine: true 
            }
        ],
        "vue/prop-name-casing": [
            "error",
            "snake_case"
        ],
        "vue/component-name-in-template-casing": [
            "error", 
            "kebab-case", {
                "registeredComponentsOnly": false,
                "ignores": [] 
            }
        ]
    },
    "overrides": [
        {
            "files": ["*.tsx", "*.ts"],
            "rules": {
                "indent": ["error", 4]
            } 
        }
    ] 
};