import { Component, OnInit } from '@angular/core';
import { FullpartlistService } from 'src/app/partshome/service/part/fullpartlist/fullpartlist.service';
import { PartnumberObj } from 'src/app/partshome/service/part/fullpartlist/partnumberobj';

@Component({
  selector: 'fullpartlist',
  templateUrl: './fullpartlist.component.html',
  styleUrls: ['./fullpartlist.component.css']
})
export class FullpartlistComponent implements OnInit {
parts: PartnumberObj[];

  constructor(private fullpartlistservice: FullpartlistService) { }
  ngOnInit() {
    return this.fullpartlistservice.getPartsdata()
    .subscribe(data =>this.parts = data);
    
    

  }

}
