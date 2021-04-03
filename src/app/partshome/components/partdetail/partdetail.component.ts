import { Component, OnInit } from '@angular/core';
import {PartdetailService} from '../../service/partdetail/partdetail.service'
import {PartObj} from '../../objects/partObj';
@Component({
  selector: 'partdetail',
  templateUrl: './partdetail.component.html',
  styleUrls: ['./partdetail.component.css']
})
export class PartdetailComponent implements OnInit {

  constructor(private partdetailService: PartdetailService) { }
  partdetail: PartObj=<PartObj>{};

  ngOnInit(): void {
    this.getPartdetail();
  }

  getPartdetail() {
//    this.partdetailService.getPartdetail().subscribe(fetchedPartmasterdataList=>{console.log("Test1:", fetchedPartmasterdataList);this.partdetail=fetchedPartmasterdataList});
    return this.partdetailService.getPartdetail().subscribe(fetchedPartHistory=>{this.partdetail=fetchedPartHistory});

  }

}
