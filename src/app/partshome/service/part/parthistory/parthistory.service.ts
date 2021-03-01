import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartHistoryObj } from './parthistoryObj';


@Injectable({
  providedIn: 'root'
})
export class ParthistoryService {

  private partHistoryUrl = "http://localhost:4200/parts/history/AL101059365";  // URL to web api

  constructor(private http:HttpClient) { }
  getParthistory(): Observable<PartHistoryObj[]>{
    return this.http.get<PartHistoryObj[]>(this.partHistoryUrl)
  }
}
