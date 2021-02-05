import { Component } from '@angular/core';
import {PartService} from './part.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular site';

  constructor(private part:PartService)
  {
    this.part.getData().subscribe(data=>{
      console.warn(data)
    })
  }
}