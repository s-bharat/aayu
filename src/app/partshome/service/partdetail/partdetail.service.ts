import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartObj } from '../../objects/partObj';
@Injectable({
  providedIn: 'root'
})
export class PartdetailService {


  private partDetail = "http://localhost:4200/parts/byPartNumber/AL101059365";  // URL to web api

  constructor(private http:HttpClient) { }
  getPartdetail(): Observable<PartObj>{
    return this.http.get<PartObj>(this.partDetail)
  }
}
