module.exports = {
  // Use the TypeScript parser for all files
  parser: '@typescript-eslint/parser',
  
  // Define environment and extensions
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  
  // Extend recommended rule sets
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  // Settings for React
  settings: {
    react: {
      version: 'detect',
    },
  },

  // Configuration des règles
  rules: {
    // 1. DÉTECTION DES VARIABLES NON UTILISÉES (Fait échouer le workflow)
    '@typescript-eslint/no-unused-vars': [
      'error', 
      { 
        argsIgnorePattern: '^_', // Ignorer les variables qui commencent par _
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],

    // 2. RÈGLE 'LOVE COMPONENT' (Fait échouer le workflow techniquement)
    // Force les fonctions de composant dans les fichiers .tsx/.jsx à se terminer par 'Love'.
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "function",
        "format": ["PascalCase"],
        "custom": {
          "regex": "Love$", // 👈 Le suffixe 'Love' est obligatoire
          "match": true
        },
        "filter": {
          "regex": "\\.(tsx|jsx)$", // 👈 S'applique uniquement aux composants
          "match": true
        },
        "message": "Les composants fonctionnels doivent être nommés en PascalCase et se terminer par 'Love'. 💖"
      }
    ],

    // 3. Règles Générales de Style
    'react/jsx-pascal-case': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', 
        unnamedComponents: 'arrow-function',
      },
    ],
    
    // Désactiver la règle générique d'ESLint pour utiliser la version TS
    'no-unused-vars': 'off',
  },
};