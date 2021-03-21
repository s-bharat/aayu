import { Component, OnInit } from '@angular/core';
import {ParthistoryService} from '../../service/parthistory/parthistory.service'
import {PartHistoryObj} from '../../objects/parthistoryobj';

@Component({
  selector: 'parthistory',
  templateUrl: './parthistory.component.html',
  styleUrls: ['./parthistory.component.css'],
})
export class ParthistoryComponent implements OnInit {
constructor(private parthistoryService: ParthistoryService) { };

  partHistory: PartHistoryObj[];
  ngOnInit() {
    this.getParthistory();
    //this.parthistoryService.getParthistory().then(data => this.products = data);

  }

  getParthistory() {
    return this.parthistoryService.getParthistory().subscribe(fetchedPartHistory=>{this.partHistory=fetchedPartHistory});
  //  this.partmasterdataService.getPartmasterdata().subscribe(fetchedPartmasterdataList=>{console.log("Test1:", fetchedPartmasterdataList);this.partmasterdataList=fetchedPartmasterdataList});

  }

}
