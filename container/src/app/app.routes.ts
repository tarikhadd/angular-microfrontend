import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaygroundComponent } from './playground/playground.component';

export const appRoutes: Route[] = [
  {
    path: 'playground',
    component: PlaygroundComponent
  },

  {
    path: 'products',
    loadChildren: () =>
      import('products/Products').then((m) => m.ProductsModule),
  },

  {
    path: 'product/:id',
    loadChildren: () =>
      import('checkout/CheckoutPage').then((m) => m.ProductOverviewModule),
  },

  {
    path: '',
    component: ContentComponent,
  },

  {
    path: 'error',
    component: NotFoundComponent,
  },

  {
    path: '**',
    redirectTo: 'error',
  },
];
