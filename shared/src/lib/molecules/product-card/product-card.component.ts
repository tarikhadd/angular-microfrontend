import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() imgSrc: string | null | undefined = 'https://media.istockphoto.com/id/1217681384/vector/illustration-of-grocery-basket-full-of-healthy-food.jpg?s=612x612&w=0&k=20&c=Tit_skHQ-lrzBRmyh52k3HvugSJe_rkaAi0eiWF9pAQ=';
  @Input() description: string | null | undefined = '';
  @Input() price: number | null | undefined = null;

  @Output() cardClick = new EventEmitter();

  onClick() {
    this.cardClick.emit();
  }
}
