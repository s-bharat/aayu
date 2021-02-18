import { Component, OnInit } from '@angular/core';
import { FullpartlistService } from 'src/app/partshome/service/part/fullpartlist/fullpartlist.service';

import { Fullpartlistobj } from 'src/app/partshome/service/part/fullpartlist/fullpartlistobj';

@Component({
  selector: 'fullpartlist',
  templateUrl: './fullpartlist.component.html',
  styleUrls: ['./fullpartlist.component.css']
})
export class FullpartlistComponent implements OnInit {
data: Fullpartlistobj[];
  constructor(private fullpartlistservice: FullpartlistService) { }
  ngOnInit() {
    return this.fullpartlistservice.getPartmasterdata()
    .subscribe(data =>this.data = data);

  }

}
