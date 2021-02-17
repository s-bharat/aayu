import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fullpartlistobj } from './fullpartlistobj';


@Injectable({
  providedIn: 'root'
})
export class FullpartlistService {

  private partmasterdataUrl = "http://localhost:4200/partmasterdata";  // URL to web api

  constructor(private http:HttpClient) { }
  getPartmasterdata(): Observable<Fullpartlistobj[]>{
    return this.http.get<Fullpartlistobj[]>(this.partmasterdataUrl)
  }
}
