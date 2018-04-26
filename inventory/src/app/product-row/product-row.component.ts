import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Output() onDeleteProduct : EventEmitter<Product>;
  constructor() {
    this.onDeleteProduct = new EventEmitter()
   }

  ngOnInit() {
  }

  deleteItem(){
    this.onDeleteProduct.emit(this.product)
  }
}
