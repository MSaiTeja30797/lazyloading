import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingRoutingModule } from './mailing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MailingRoutingModule,HttpClientModule,FormsModule
  ]
})
export class MailingModule { }
