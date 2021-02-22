import { Component, OnInit } from '@angular/core';
import {PartmasterdataObj} from '../../service/partmasterdata/partmasterdataobj';
import {PartmasterdataService} from '../../service/partmasterdata/partmasterdata.service';

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

  partmasterdataAssembly: PartmasterdataObj[];
  selectedPartmasterdataAssembly: PartmasterdataObj;

  partmasterdataUpDown: PartmasterdataObj[];
  selectedPartmasterdataUpDown: PartmasterdataObj;

  partmasterdataLeftRight: PartmasterdataObj[];
  selectedPartmasterdataLeftRight: PartmasterdataObj;

  partmasterdataFrontRear: PartmasterdataObj[];
  selectedPartmasterdataFrontRear: PartmasterdataObj;

  partmasterdataPartName: string[];
  selectedPartmasterdataPartName: string;

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

            this.partmasterdataAssembly=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'Assembly');

            this.partmasterdataUpDown=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'UpDown');

            this.partmasterdataLeftRight=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'LeftRight');

            this.partmasterdataFrontRear=fetchedPartmasterdataList.filter(item => item.partMasterDataType === 'FrontRear');
        }
    });
  //  this.partmasterdataService.getPartmasterdata().subscribe(fetchedPartmasterdataList=>{console.log("Test1:", fetchedPartmasterdataList);this.partmasterdataList=fetchedPartmasterdataList});

  }
  search(event) {
//    this.mylookupservice.getResults(event.query).then(data => {this.results = data;
          this.partmasterdataPartName=["Seat", "Lamp"];
}

}
