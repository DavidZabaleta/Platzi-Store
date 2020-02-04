import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.module';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  backgroundColor: string;
  color: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe( products => {
      this.products = products;
    });
  }

}
