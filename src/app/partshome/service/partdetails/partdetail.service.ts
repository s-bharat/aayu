import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartdetailService {  

  constructor(private http:HttpClient) { }
 
  getPartData(partNumber:string)
  {
    return this.http.get("http://localhost:4200/parts/bypartNumber")
  }
}
