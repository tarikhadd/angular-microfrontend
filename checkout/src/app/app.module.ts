import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        {
          path: 'products',
          redirectTo: 'product/1'
        },

        {
          path: 'product/:id',
          loadChildren: () =>
            import('./product-overview/product-overview.module').then(
              (m) => m.ProductOverviewModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
