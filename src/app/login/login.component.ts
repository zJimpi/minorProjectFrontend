import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string="";
  password: string="";

  constructor(private http:HttpClient,private router:Router){}

  login(){

    let bodyData ={
      "userName":this.username,
      "password":this.password
    };
    this.http.post("http://localhost:8086/user/login", bodyData, {responseType : 'text'}).subscribe((resultData:any)=>
    {
      
      if(resultData.message == "Email not exits")
      {
        alert("email doesn't exist");
      }
      else if(resultData.message == "Login Success"){

        this.router.navigateByUrl('/home');
      }
      else{
        alert("inncorect email and password")
      }



    }
    );
  }
}
