import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchpipePipe } from './mypipes/searchpipe.pipe';
import { SortpipePipe } from './mypipes/sortpipe.pipe';
import { MycolorDirective } from './directives/mycolor.directive';
import { FormsModule } from '@angular/forms';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SearchpipePipe,
    SortpipePipe,
    MycolorDirective,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,TechRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }