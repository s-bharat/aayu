import { Component, OnInit } from '@angular/core';
import {PartmasterdataObj} from '../../objects/partmasterdataobj';
import {PartmasterdataService} from '../../service/partmasterdata/partmasterdata.service';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-partmasterdata',
  templateUrl: './partmasterdata.component.html',
  styleUrls: ['./partmasterdata.component.css']
})

export class PartmasterdataComponent implements OnInit{
  createpartform: FormGroup;
    
  submitted: boolean;
      
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

  partmasterdataPartName: string[]=[];
  selectedPartmasterdataPartName: string;

  partmasterdataPartNameList: PartmasterdataObj[]; 
  selectedPartmasterdataPartNameList: PartmasterdataObj[]; 


  constructor(private partmasterdataService: PartmasterdataService,private fb: FormBuilder) { };

  ngOnInit() {
    this.getPartmasterdataObj();
            this.createpartform = this.fb.group({
            'partName': new FormControl('',Validators.required),
            'prefix': new FormControl('',Validators.required),
            'VehicleType': new FormControl('',Validators.required),
            'VehicleCode': new FormControl('',Validators.required),
            'Module': new FormControl('',Validators.required),
            'Assembly': new FormControl(''),
            'FrontRear': new FormControl(''),
            'UpDown': new FormControl(''),
            'LeftRight': new FormControl(''),
            //'lastname': new FormControl('', Validators.required),
        });
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
    this.partmasterdataService.searchPartmasterdataPartName(event.query).subscribe(fetchedPartmasterdataPartNameList=>{
      if(fetchedPartmasterdataPartNameList.length===0){
        this.partmasterdataPartName=[event.query];
      }else{
        this.partmasterdataPartName=["Enter down Arrow Key to Search"];
        for (let i = 0; i < fetchedPartmasterdataPartNameList.length; i++) {
          this.partmasterdataPartName[i]=fetchedPartmasterdataPartNameList[i].partMasterDataTypeValue;
        }
      }
    }
    );
  }
onSubmit(value: string) {
    this.submitted = true;
    //this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted', sticky: true});
}

get diagnostic() { return JSON.stringify(this.createpartform.value); }

}
