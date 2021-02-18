import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepartComponent } from './components/createpart/createpart.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {PartmasterdataComponent } from './components/createpart/partmasterdata/partmasterdata.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PartnameComponent } from './components/createpart/partname/partname.component';
import {InputTextModule} from 'primeng/inputtext';
import { FullpartslistComponent } from './components/viewpart/fullpartslist/fullpartslist.component';

@NgModule({
  exports: [CreatepartComponent,PartmasterdataComponent,FullpartslistComponent],
  declarations: [CreatepartComponent, PartmasterdataComponent, PartnameComponent, FullpartslistComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InputTextModule
  ],
  providers: []

})
export class PartshomeModule { }
