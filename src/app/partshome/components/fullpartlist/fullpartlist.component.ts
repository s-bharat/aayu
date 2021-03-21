import { Component, OnInit } from '@angular/core';
import {FullpartlistService} from '../../service/fullpartlist/fullpartlist.service';
import  {PartObj} from '../../objects/partObj';

@Component({
  selector: 'fullpartlist',
  templateUrl: './fullpartlist.component.html',
  styleUrls: ['./fullpartlist.component.css']
})
export class FullpartlistComponent implements OnInit {
  constructor(private fullpartlistService: FullpartlistService) { };

  partNumberList: PartObj[];

  ngOnInit() {
    this.getPartList();
    //this.parthistoryService.getParthistory().then(data => this.products = data);

  }

  getPartList() {
    return this.fullpartlistService.getPartsdata().subscribe(fetchedPartNumber=>{this.partNumberList=fetchedPartNumber});
  }

}
