import { Injectable } from '@angular/core';

import { Product } from '../../components/products/components/product/product.module';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.urlApi.concat('products/'));
  }

  getProduct(id: string) {
    return this.http.get<Product>(environment.urlApi.concat('products/').concat(id));
  }

  createProduct(product: Product) {
    return this.http.post(environment.urlApi.concat('products/'), product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(environment.urlApi.concat('products/').concat(id), changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(environment.urlApi.concat('products/').concat(id));
  }
}
