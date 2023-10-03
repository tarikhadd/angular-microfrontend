import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsData, reedemCodes } from 'shared';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent {

  productsList = productsData;
  product: any = null;
  reedemCodes = reedemCodes;
  discount: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id']
      this.product = this.productsList.filter(p => p.id === Number(id));
    })
  }

  reedemRequest(code: any) {
    if(this.reedemCodes.includes(code)) {
      this.product[0].price = this.product[0].price - (this.product[0].price * .20);
      this.discount = true
    }else {
      this.discount = 0;
    }
  }
}
