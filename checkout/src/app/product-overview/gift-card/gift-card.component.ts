import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss'],
})
export class GiftCardComponent {
  @Output() reedemEmit = new EventEmitter();

  code = '';

  reedem() {
    console.log(this.code);
    this.reedemEmit.emit(this.code);
  }

}
