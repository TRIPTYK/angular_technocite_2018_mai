import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products:Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running shoes',
        '/assets/images/products/black-shoes.jpg',
        ['men', 'Shoes', 'Running'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Black running shoes',
        '/assets/images/products/blue-jacket.jpg',
        ['WOMEN', 'Apparel', 'Jackets & vests'],
        98.99
      ),
      new Product(
        'NICEHAT',
        'A nice black hat running shoes',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        38.99
      )
    ];
   }

   public getProducts(){
     return this.products;
   }

   public deleteProduct(product:Product){
    this.products = this.products.filter(item => item !== product)
   }

}
