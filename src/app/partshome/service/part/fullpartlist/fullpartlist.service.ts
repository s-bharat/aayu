import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartnumberdataObj } from '../partnumberfieldsObj';


@Injectable({
  providedIn: 'root'
})
export class FullpartlistService {

  private partList = "http://localhost:4200/parts";  // URL to web api

  constructor(private http:HttpClient) { }

  getPartsdata(): Observable<PartnumberdataObj []>{
    return this.http.get<PartnumberdataObj[]>(this.partList)

  }
}
