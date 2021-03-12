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
  partsData: PartObj;
  
  constructor(private partdetailService: PartdetailService, private route: ActivatedRoute,) { }

  ngOnInit():void {
    this.getPartsData();
    }
    getPartsData(): void{
      const partnumber = +this.route.snapshot.paramMap.get('partNumber');
      this.partdetailService.getPartdata(partnumber).subscribe(fetchedData=>{
        this.partsData=fetchedData
      console.warn(this.partsData)
      });
      

    


  }

}