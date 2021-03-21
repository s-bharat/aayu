import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartdetailService } from '../../service/partdetails/partdetail.service';
@Component({
  selector: 'partdetails',
  templateUrl: './partdetails.component.html',
  styleUrls: ['./partdetails.component.css']
})
export class PartdetailsComponent implements OnInit {
  partsData: any;
  
  
  constructor(private partdetailService: PartdetailService, private route: ActivatedRoute,) { }

  ngOnInit() {
    let partnumber= this.route.snapshot.params['partNumber'];
   this.partdetailService.getPartData(partnumber).subscribe(d=>
      {console.log(d);
        this.partsData=d
      });
    }

   
      }
    
    
      

    


  

