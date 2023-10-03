const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,

    remotes: [
      'Products', 'http://localhost:4201/',
      'Checkout', 'http://localhost:4202/',
    ]
});
