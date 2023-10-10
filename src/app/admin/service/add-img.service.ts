import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddImgService {

  constructor(private _http:HttpClient) { }
  addImage(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/image',data);
  }
  updateImage(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/image/${id}`, data);
  }

  getImageList(): Observable<any> {
    return this._http.get('http://localhost:3000/image');
  }

  deleteImage(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/image/${id}`);
  }
}
