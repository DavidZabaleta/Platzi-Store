import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/components/product/product.component';
import { NotFoundComponent } from './components/not-found/components/not-found/not-found.component';
import { ProductsComponent } from './components/products/components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/components/product-detail/product-detail.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './components/layout/layout.module';
import { NotFoundModule } from './components/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutModule,
    NotFoundModule,
    CoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
