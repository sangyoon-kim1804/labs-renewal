// env-config.js

module.exports = {
  'process.env.BACKEND_URL':
    process.env.NODE_ENV === 'production'
      ? 'https://sangyoon-kim1804.github.io/labs-renewal'
      : '',
};