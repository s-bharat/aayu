import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartmasterdataObj} from '../../objects/partmasterdataobj';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartmasterdataService {

  private partmasterdataUrl = "http://localhost:4200/partmasterdata";  // URL to web api

  constructor(private http:HttpClient) { }
  getPartmasterdata(): Observable<PartmasterdataObj[]>{
    return this.http.get<PartmasterdataObj[]>(this.partmasterdataUrl)
  }
  searchPartmasterdataPartName(searchValue: string): Observable<PartmasterdataObj[]>{
    return this.http.get<PartmasterdataObj[]>((this.partmasterdataUrl)+"/search/?searchpartMasterDataType=partName&searchpartMasterDataTypeValue="+searchValue)
  }

}
