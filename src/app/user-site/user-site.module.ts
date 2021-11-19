import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSiteRoutingModule } from './user-site-routing.module';
import { UserSiteComponent } from './user-site.component';
import { MainUserSiteModule } from './main-user-site/main-user-site.module';

@NgModule({
  declarations: [
    UserSiteComponent
  ],
  imports: [
    CommonModule,
    UserSiteRoutingModule,
    MainUserSiteModule
  ],
  exports:[
    UserSiteComponent
  ]
})
export class UserSiteModule { }
