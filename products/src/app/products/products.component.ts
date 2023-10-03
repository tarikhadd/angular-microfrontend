import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productsData } from 'shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  products = productsData;

  constructor(private router: Router){}

  ngOnInit() {
    console.log(this.products); 
  }

  public showDetails(id: any) {
    this.router.navigate(['product', id]);
    console.log(id);
    
  }
}
