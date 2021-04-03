import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PartObj } from '../../objects/partObj';

@Injectable({
  providedIn: 'root'
})
export class CreatepartService {

  constructor(private http:HttpClient) { }

  //createPart(){
  createPart(partObj: PartObj){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body ={
      "partName": "Seat 2",
      "PartNumberFields": {
          "partPrefix": "A",
          "vehicleType": "L1",
          "vehicleCode": "01",
          "vehicleModule": "05"
      },
      "PartNameFields": {
          "assembly": "Assy",
          "upDown": "Upper",
          "leftRight": "LH",
          "frontRear": "FR"
      },
      "user": {
          "firstName": "Hemant",
          "lastName": "Soni",
          "email": "hemant.soni@pm.com",
          "userID": "hemsoni"
      }
  };
    this.http.post<any>('http://localhost:4200/parts/createNewPart/', partObj).subscribe();

  }
}
