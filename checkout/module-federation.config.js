module.exports = {
  name: 'checkout',
  exposes: {
    './CheckoutPage': 'checkout/src/app/product-overview/product-overview.module.ts',
    './GiftCardComponent': 'checkout/src/app/product-overview/gift-card/gift-card.component.ts'
  },
};
