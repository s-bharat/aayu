import { Component, OnInit } from '@angular/core';
import { PartObj } from '../../../service/part/partObj';
import { CreatepartService } from '../../../service/createpart/createpart.service';
@Component({
  selector: 'app-createpart',
  templateUrl: './createpart.component.html',
  styleUrls: ['./createpart.component.css'],
})
export class CreatepartComponent implements OnInit {
  partdata:PartObj;

  constructor(private createpartservice: CreatepartService) { }

  ngOnInit(): void {
  }
  save(): void {
    this.createpartservice.postPartdata(this.partdata)
    .subscribe(
      data=>console.log('success',data),
      
    )
}}
