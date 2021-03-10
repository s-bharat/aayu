import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {FullpartlistComponent } from '../partshome/components/part/fullpartlist/fullpartlist.component';
import { PartdetailsComponent } from '../partshome/components/part/partdetails/partdetails.component';

const routes: Routes=[
  {
  path: 'fullpartlist',
  component: FullpartlistComponent
},
{
  path: 'partdetails/:partNumber',
  component: PartdetailsComponent

}]
@NgModule({
  declarations: [],
  imports: [
  
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
