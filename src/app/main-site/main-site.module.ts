import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSiteRoutingModule } from './main-site-routing.module';
import { MainSiteComponent } from './main-site.component';
import { MainWindowModule } from './main-window/main-window.module';

@NgModule({
  declarations: [
    MainSiteComponent
  ],
  imports: [
    CommonModule,
    MainSiteRoutingModule,
    MainWindowModule
  ],
  exports:[
    MainSiteComponent
  ]
})
export class MainSiteModule { }
