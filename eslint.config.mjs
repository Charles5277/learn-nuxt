// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // - vue
  {
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
    },
  },

  // - others
  {
    rules: {
      'no-var': 'error',
      'eqeqeq': 'error',
    },
  },
);
