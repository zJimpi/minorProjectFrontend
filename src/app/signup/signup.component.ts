import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string="";
  email: string="";
  username: string="";
  password: string="";

  constructor(private http:HttpClient){}

  save(){

    let bodyData ={
      "name" : this.name,
      "email":this.email,
      "userName":this.username,
      "password":this.password
    };
    this.http.post("http://localhost:8086/user/save", bodyData, {responseType : 'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("user registered successfully!");
    }
    );
  }
}
