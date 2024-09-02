module.exports = {
  root: true,  // Ensures ESLint only uses this configuration
  
  settings: {
    react: {
      version: 'detect',  // Automatically detects the React version
    },
  },
  
  plugins: [
    '@next/eslint-plugin-next',  // Add the Next.js plugin
  ],
  
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:next/recommended',  // Add Next.js recommended rules
    'next/core-web-vitals'
  ],
  
  rules: {
    // Your custom rules go here
  },
};
