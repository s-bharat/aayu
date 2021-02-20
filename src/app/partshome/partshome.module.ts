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
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ParthistoryComponent } from './components/part/parthistory/parthistory.component';

@NgModule({
  exports: [CreatepartComponent,PartmasterdataComponent,ParthistoryComponent],
  declarations: [CreatepartComponent, PartmasterdataComponent, ParthistoryComponent ],
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
    AutoCompleteModule,
    ParthistoryComponent
  ],
  providers: []

})
export class PartshomeModule { }
