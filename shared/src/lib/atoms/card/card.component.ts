import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBorderStyleEnum, CardPaddingEnum } from './card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() padding = true;
  @Input() clickable = true;
  @Input() borderRadius = true;
  @Input() shadow = true;

  @Output() cardClick = new EventEmitter();

  onClick() {
    this.cardClick.emit();
  }
}
