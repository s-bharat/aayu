import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatepartService {

  constructor(private http:HttpClient) { }

  createPart(){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    const body ={
      "partName": "Seat 2",
      "partNumberFields": {
          "partPrefix": "A",
          "vehicleType": "L1",
          "vehicleCode": "01",
          "vehicleModule": "05"
      },
      "partNameFields": {
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
    this.http.post<any>('http://localhost:4200/parts/createNewPart/', body).subscribe();

  }
}
