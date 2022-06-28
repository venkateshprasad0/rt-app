import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserResponse } from './UserResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rt-app';
  result = '';
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    // this.http.get(`https://api.github.com/users/abdullah`).toPromise()
    // .then(
    //   (data:any) => {
    //     console.log(data);
    //   }
    // );
    
      this.http.get<UserResponse>(`https://api.github.com/users/abdullah`).subscribe(
        (data)=>{
          console.log("Bio: ",data.bio);
          console.log("Company: ",data.company);
          console.log("Login: ",data.login);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
