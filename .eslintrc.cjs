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

    // 2. RÈGLE 'LOVE COMPONENT' (MODIFIÉE pour cibler les exportations par défaut)
    "@typescript-eslint/naming-convention": [
      "error",
      
      // Configuration 1 : Cible les fonctions exportées par DÉFAUT (export default function)
      {
        "selector": ["default function"], 
        "format": ["PascalCase"],
        "custom": {
          "regex": "Love$", // Force le suffixe 'Love'
          "match": true
        },
        "filter": {
          "regex": "\\.(tsx|jsx)$",
          "match": true
        },
        "message": "Le composant exporté par défaut doit être nommé en PascalCase et se terminer par 'Love'. 💖"
      },
      
      // Configuration 2 : Cible les fonctions NOMMÉES (const MyComponentLove = ...)
      {
        "selector": "function",
        "format": ["PascalCase"],
        "custom": {
          "regex": "Love$",
          "match": true
        },
        // S'applique aux fonctions dans les fichiers composants, mais n'est pas nécessaire si la règle du dessus gère le default.
        // Pour être plus sûr, on cible toutes les fonctions non "default" dans les fichiers .tsx/.jsx.
        "filter": {
          "regex": "^(?!.*default).*\\.(tsx|jsx)$", 
          "match": true
        },
        "message": "Les composants fonctionnels nommés doivent se terminer par 'Love'. 💖"
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