import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartshomeModule } from './partshome/partshome.module';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {SplitterModule} from 'primeng/splitter';
import {ScrollPanelModule} from 'primeng/scrollpanel';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    PartshomeModule,
    PanelModule,
    TabViewModule,
    SplitterModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
