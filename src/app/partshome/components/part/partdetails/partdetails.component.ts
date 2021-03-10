import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartObj } from '../../../service/part/partObj';
import { PartdetailService } from '../../../service/partdetails/partdetail.service';
@Component({
  selector: 'partdetails',
  templateUrl: './partdetails.component.html',
  styleUrls: ['./partdetails.component.css']
})
export class PartdetailsComponent implements OnInit {

  constructor(private partdetailService: PartdetailService, private route: ActivatedRoute,) { }

  partsData: PartObj;

  ngOnInit() {
    const partnumber = +this.route.snapshot.paramMap.get('partNumber');
    this.getPartsData(partnumber);
    }
    getPartsData(partnumber){
      this.partdetailService.getPartdata(partnumber).subscribe(fetchedpartsData=>{
        this.partsData=fetchedpartsData
      console.warn(this.partsData)
      });
      return this.partdetailService.getPartdata(partnumber).subscribe(fetchedpartsData=>{this.partsData=fetchedpartsData});

    }


  }


