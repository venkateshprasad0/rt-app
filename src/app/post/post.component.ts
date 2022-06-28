import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    const req = this.http.post(`http://jsonplaceholder.typicode.com/posts`,{
      title:'foo',
      body:'bar',
      userId: 1
    }).subscribe(
      res =>{
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );

  }

}
