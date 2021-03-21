import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepartComponent } from './components/createpart/createpart.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {PartmasterdataComponent } from './components/partmasterdata/partmasterdata.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ParthistoryComponent } from './components/parthistory/parthistory.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FullpartlistComponent } from './components/fullpartlist/fullpartlist.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import {PanelModule} from 'primeng/panel';
import {Validators,FormControl,FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { PartdetailComponent } from './components/partdetail/partdetail.component';

@NgModule({
  exports: [CreatepartComponent,PartmasterdataComponent,ParthistoryComponent,FullpartlistComponent,SearchresultComponent,PartdetailComponent],
  declarations: [CreatepartComponent, PartmasterdataComponent, ParthistoryComponent,FullpartlistComponent, SearchresultComponent, PartdetailComponent],
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
