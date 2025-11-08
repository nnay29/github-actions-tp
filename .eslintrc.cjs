
    // module.exports = {
      
    //   root: true,
      
    //   env: { browser: true, es2020: true, node: true },
      
    //   extends: [
    //     'eslint:recommended',
    //     'plugin:@typescript-eslint/recommended',
    //     'plugin:react-hooks/recommended',
    //   ],
      
      
    //   parser: '@typescript-eslint/parser',
      
      
    //   parserOptions: { 
    //     ecmaVersion: 'latest', 
    //     sourceType: 'module',
    //     ecmaFeatures: { jsx: true },
    //     project: './tsconfig.json' 

    //   },
      
      
    //   plugins: ['react-refresh'],
      
      
    //   rules: {
        
    //     'react-refresh/only-export-components': [
    //       'warn',
    //       { allowConstantExport: true },
    //     ],

        
    //   },
      
      
    //   ignorePatterns: ['dist', '.eslintrc.cjs'],

    // };


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

  // Configuration for your fun rule
  rules: {
    // 💡 General Rule: Enforce a new line before return statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    
    // 💖 The "Love Component" Custom Rule:
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // Enforces functional components use 'const Component = () => {}'
        unnamedComponents: 'arrow-function',
      },
    ],
    
    // This is the core rule that enforces the PascalCase and 'Love' suffix
    'check-love-component-naming': 'error', // We'll define this rule below
  },
};   