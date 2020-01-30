import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ContactModule { }
