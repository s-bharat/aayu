import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartObj } from '../../service/part/partObj';


@Injectable({
  providedIn: 'root'
})
export class PartdetailService {  

  private partsdataUrl = "http://localhost:4200/parts/byPartNumber/AL101059365";  // URL to web api

  constructor(private http:HttpClient) { }

  getPartdata():Observable<PartObj>{
    return this.http.get<PartObj>(this.partsdataUrl);
  }
}
