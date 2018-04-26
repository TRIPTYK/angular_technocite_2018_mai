import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  
  constructor(public productsService : ProductsService) {
   
   }

  ngOnInit() {
  }

  deleteItem(product:Product){
   this.productsService.deleteProduct(product)
  }
}
