import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class LayoutModule { }
