import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products.service';
import { Product } from 'src/app/components/products/components/product/product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];

  displayedProducts: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe((response) => {
        if (response) {
          const index = this.products.findIndex(product => product.id === id);
          this.products.splice(index, 1);
          this.products = [...this.products];
        }
      });
  }

}
