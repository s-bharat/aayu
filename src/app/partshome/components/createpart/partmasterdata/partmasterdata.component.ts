import { Component, OnInit } from '@angular/core';
import {PartmasterdataObj} from '../../../service/partmasterdata/partmasterdataobj';
import {PartmasterdataService} from '../../../service/partmasterdata/partmasterdata.service';

@Component({
  selector: 'app-partmasterdata',
  templateUrl: './partmasterdata.component.html',
  styleUrls: ['./partmasterdata.component.css']
})

export class PartmasterdataComponent implements OnInit{
  
  partmasterdataList: PartmasterdataObj[]; 
  selectedPartmasterdataList: PartmasterdataObj[]; 

  partmasterdataPrefixes: PartmasterdataObj[];
  selectedPartmasterdataPrefixes: PartmasterdataObj;

  partmasterdatapVehicleType: PartmasterdataObj[];
  selectedPartmasterdataVehicleType: PartmasterdataObj;

  partmasterdatapVehicleCode: PartmasterdataObj[];
  selectedPartmasterdataVehicleCode: PartmasterdataObj;

  partmasterdataModules: PartmasterdataObj[];
  selectedPartmasterdataModules: PartmasterdataObj;

  constructor(private partmasterdataService: PartmasterdataService) { };


  ngOnInit() {
    this.getPartmasterdataObj();
  }

  getPartmasterdataObj(): void {

    this.partmasterdataService.getPartmasterdata().subscribe(fetchedPartmasterdataList=>{
        
        for (let i = 0; i < fetchedPartmasterdataList.length; i++) {
            this.partmasterdataPrefixes = fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'Prefix');
    
            this.partmasterdatapVehicleType = fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'Vehicle type');
            
            this.partmasterdatapVehicleCode=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'Vehicle Code');
    
            this.partmasterdataModules=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'Module');
    
        }
    });
  //  this.partmasterdataService.getPartmasterdata().subscribe(fetchedPartmasterdataList=>{console.log("Test1:", fetchedPartmasterdataList);this.partmasterdataList=fetchedPartmasterdataList});

  }


}
