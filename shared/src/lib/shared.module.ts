import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './atoms/card/card.component';
import { ProductCardComponent } from './molecules/product-card/product-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, ProductCardComponent],
  exports: [CardComponent, ProductCardComponent],
})
export class SharedModule {}
