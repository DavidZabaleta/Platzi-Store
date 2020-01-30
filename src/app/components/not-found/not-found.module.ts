import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    NotFoundRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class NotFoundModule { }
