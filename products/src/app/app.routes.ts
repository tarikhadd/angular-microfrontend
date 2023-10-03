import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },

  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },

  {
    path: 'product/:id',
    loadChildren: () => import('checkout/CheckoutPage').then((m) => m.ProductOverviewModule),
  },
];
