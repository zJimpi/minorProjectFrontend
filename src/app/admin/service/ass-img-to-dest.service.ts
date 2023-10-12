import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssImgToDestService {

  constructor(private _http:HttpClient) { }

  assImgToDest(iId: number, dId: number, data: any):Observable<any>{
    return this._http.post(`http://localhost:8086/destination/assImg/${iId}/ToDest/${dId}`,data);
  }
  
}
