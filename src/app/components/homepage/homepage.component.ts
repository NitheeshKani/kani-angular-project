import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.productListApi()
  }

  productListArray :any= []

  productListApi(){
    this.http.get("./assets/json/product.json").subscribe(data =>{
      console.log(data)
      this.productListArray = data
      
    })
  }
  

}
