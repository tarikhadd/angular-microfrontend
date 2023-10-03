import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './product-overview.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared';


@NgModule({
  declarations: [ProductOverviewComponent, GiftCardComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductOverviewComponent },
      {
        path: 'product/:id',
        component: ProductOverviewComponent,
      },
    ]),
    SharedModule
  ],
})
export class ProductOverviewModule {}
