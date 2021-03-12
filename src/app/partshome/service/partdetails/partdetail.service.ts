import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartObj } from '../../service/part/partObj';


@Injectable({
  providedIn: 'root'
})
export class PartdetailService {  

  private partsdataUrl = "http://localhost:4200/parts/bypartNumber";  // URL to web api

  constructor(private http:HttpClient) { }

  getPartdata<Data>(partnumber):Observable<PartObj>
  {
    const url=`${this.partsdataUrl}/${partnumber}`;
    return this.http.get<PartObj>(url);
  }
}
