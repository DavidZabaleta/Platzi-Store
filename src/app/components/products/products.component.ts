import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.module';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[];

  constructor(private productsService: ProductsService) {}
  
  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  backgroundColor: string;
  color: string;

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
