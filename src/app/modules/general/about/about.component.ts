import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  filteredString:any;  
  sortby:any='1'
  /*products:Product[]=[
    {productId:101, productName:'toy',productPrice:3000,productDes:'the product is toy ',productImg:'assets/images/hlo.jpg'},
    {productId:102, productName:'drone',productPrice:50000,productDes:'the product is drone ',productImg:'assets/images/drone.jpg'},
    {productId:103, productName:'tiger',productPrice:500,productDes:'the product is tiger ',productImg:'assets/images/tiger.jpg'},
    {productId:104, productName:'car',productPrice:100000,productDes:'the product is drone ',productImg:'assets/images/car.jpg'}
    
    
  ]*/
  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }


}
