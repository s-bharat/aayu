import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="http://localhost:4200/partmasterdata";
    return this.http.get(url)
  }

  
}
