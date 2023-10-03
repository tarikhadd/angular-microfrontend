import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  @ViewChild('giftCard', {read: ViewContainerRef})
  giftCardComponent!: ViewContainerRef;

  async loadComponent() {
    const { GiftCardComponent } = await import('checkout/GiftCardComponent');

    this.giftCardComponent.clear();
    this.giftCardComponent.createComponent(GiftCardComponent);
  }

}
