import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductData } from '../ProductData'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ProductData>(`https://reqres.in/api/products/3`).subscribe(
      (data) => {
        console.log(data.data.name);
      },
      err => {
        console.log("Error ocurred");
      }
    )
  }

}
