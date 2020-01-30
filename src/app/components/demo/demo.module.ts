import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    DemoRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class DemoModule { }
