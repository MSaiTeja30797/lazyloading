import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,FormsModule,HttpClientModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ],
})
export class AboutModule { }