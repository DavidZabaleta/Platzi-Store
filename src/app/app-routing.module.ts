import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './components/contact/components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/components/not-found/not-found.component';
import { HomeComponent } from './components/home/components/home/home.component';
import { ProductsComponent } from './components/products/components/products/products.component';
import { DemoComponent } from './components/demo/components/demo/demo.component';
import { ProductDetailComponent } from './components/product-detail/components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./components/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'products/:id',
        loadChildren: () => import('./components/product-detail/product-detail.module').then(m => m.ProductDetailModule)      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
