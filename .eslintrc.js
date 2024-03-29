module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "settings": {
        "import/extensions": [".js", ".ts"],
        "import/parsers": {
          "@typecript-eslint/parser": [".ts"]
        },
        "import/decver": {
          "node": {
            "extensions": [".js", ".ts"]
          }
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-inferrable-types": [
            "warn", {
              "ignoreParameters": true
            }
          ],
        "@typescript-eslint/no-unused-vars": "warn"
    },
};