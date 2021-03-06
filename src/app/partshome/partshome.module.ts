import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepartComponent } from './components/part/createpart/createpart.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {PartmasterdataComponent } from './components/partmasterdata/partmasterdata.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ParthistoryComponent } from './components/part/parthistory/parthistory.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FullpartlistComponent } from './components/part/fullpartlist/fullpartlist.component';
import { SearchresultComponent } from './components/part/searchresult/searchresult.component';
import {PanelModule} from 'primeng/panel';
import {Validators,FormControl,FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { PartdetailsComponent } from './components/part/partdetails/partdetails.component';


@NgModule({
  exports: [CreatepartComponent,PartmasterdataComponent,ParthistoryComponent,FullpartlistComponent,SearchresultComponent,PartdetailsComponent],
  declarations: [CreatepartComponent, PartmasterdataComponent, ParthistoryComponent,FullpartlistComponent, SearchresultComponent, PartdetailsComponent, PartdetailsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    ScrollPanelModule,
    AutoCompleteModule,
    PanelModule,
    ReactiveFormsModule
  ],
  providers: []

})
export class PartshomeModule { }
