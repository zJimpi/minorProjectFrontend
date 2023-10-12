import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  loggedIn : boolean =false;
  adminIn : boolean = false;
  constructor(private _http:HttpClient) { }
  adduser(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/user',data);
  }

  getuser():Observable<any>{
    return this._http.get(`http://localhost:3000/user/`);
  }
}
