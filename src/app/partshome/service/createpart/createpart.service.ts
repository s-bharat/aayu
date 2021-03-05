import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartObj } from '../part/partObj';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatepartService {

  private partUrl= 'http://localhost:4200/parts';

  constructor(private http:HttpClient) { }
  postPartdata(part: PartObj): Observable<PartObj[]>{
    return this.http.post<PartObj[]>(this.partUrl,part)
  }
}
