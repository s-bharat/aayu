import { Component, OnInit } from '@angular/core';
import { PartObj } from '../../../service/part/partObj';
import { PartdetailService } from '../../../service/partdetails/partdetail.service';
@Component({
  selector: 'partdetails',
  templateUrl: './partdetails.component.html',
  styleUrls: ['./partdetails.component.css']
})
export class PartdetailsComponent implements OnInit {

  constructor(private partdetailService: PartdetailService) { };

  partsData: PartObj;

  ngOnInit() {
    this.getPartsData();
    }
    getPartsData(){
      this.partdetailService.getPartdata().subscribe(fetchedpartsData=>{
        this.partsData=fetchedpartsData
      console.warn(this.partsData)
      });
      return this.partdetailService.getPartdata().subscribe(fetchedpartsData=>{this.partsData=fetchedpartsData});

    }


  }


