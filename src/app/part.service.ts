import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="'http://www.mocky.io/v2/5ea172973100002d001eeada";
    return this.http.get(url)
  }

  
}
