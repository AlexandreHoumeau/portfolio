const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
});
