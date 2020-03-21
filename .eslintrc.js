module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "filenames",
    "eslint-plugin-spellcheck",
    "react"
  ],
  "extends": ["airbnb", "plugin:react/recommended"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "linebreak-style": 0,
    "quotes": [2, "single"],
    "no-plusplus": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "no-console": 0,
    "comma-dangle": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "operator-linebreak": [2, "before", { "overrides": { "=": "after" } }],
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "object-curly-newline": ["error", { "multiline": true }],
    "no-unexpected-multiline": 0,
    "react/destructuring-assignment": 0,
    "@typescript-eslint/no-parameter-properties": [
      2,
      {
        "allows": [
          "private",
          "protected",
          "public",
          "private readonly",
          "protected readonly",
          "public readonly"
        ]
      }
    ],
    "filenames/match-regex": [
      2,
      "^[A-Z][a-z]+(?:[A-Z][a-z]+)*(?:[.][s][t][o][r][i][e][s])?$",
      true
    ],
    "filenames/match-exported": [2, "pascal"],
    "filenames/no-index": 2,
    "semi": 0,
    "@typescript-eslint/semi": [2],
    "spellcheck/spell-checker": [
      2,
      {
        "comments": true,
        "strings": true,
        "identifiers": true,
        "lang": "en_US",
        "skipWords": [
          "autobind",
          "tsconfig",
          "dom",
          "coduct",
          "github",
          "https",
          "facebook",
          "tsx",
          "utf8",
          "Init",
          "src",
          "jsx",
          "dir",
          "unlink",
          "readdir",
          "lstat",
          "endregion",
          "ios",
          "cli",
          "eslint",
          "rmdir",
          "eslintrc",
          "huskyrc",
          "tslint",
          "cwd",
          "argv",
          "svg",
          "typings",
          "Api",
          "Jwt",
          "auth",
          "mobx",
          "dto",
          "param",
          "params",
          "Svgr",
          "rollup",
          "quaternary",
          "grey",
          "xhr",
          "backend",
          "namespace",
          "lng",
          "semibold",
          "Segoe"
        ],
        "skipIfMatch": [
          "http://[^s]*",
          "https://[^s]*",
          "^[-\\w]+/[-\\w\\.]+$",
          "#*"
        ],
        "skipWordIfMatch": [],
        "minLength": 3
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.config.js",
        "_scripts/*",
        "index.js",
        "index.tsx",
        "*.d.ts",
        "I18next*",
        "*.native.tsx",
        "Component.tsx",
        "postInit.js"
      ],
      "rules": {
        "filenames/match-regex": 0,
        "filenames/no-index": 0,
        "filenames/match-exported": 0
      }
    },
    {
      "files": ["**/*.web.*"],
      "rules": {
        "filenames/match-exported": 0
      }
    },
    {
      "files": ["**/*.stories.*"],
      "rules": {
        "react/destructuring-assignment": 0
      }
    },
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "@typescript-eslint/no-unused-vars": [2, { "args": "none" }],
        "no-undef": ["off"]
      }
    },
    {
      "files": ["TaggedTemplateLiteralSnippets.ts"],
      "rules": {
        "no-nested-ternary": 0
      }
    },
    {
      "files": ["index.tsx"],
      "rules": {
        "import/first": 0
      }
    }
  ]
}

