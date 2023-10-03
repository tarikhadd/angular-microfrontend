module.exports = {
  name: 'products',
  exposes: {
    './Products': 'products/src/app/products/products.module.ts',
  },
  remotes: ['checkout']
};
