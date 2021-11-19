import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainUserSiteRoutingModule } from './main-user-site-routing.module';
import { MainUserSiteComponent } from './main-user-site.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    MainUserSiteComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    MainUserSiteRoutingModule
  ],
  exports:[
    MainUserSiteComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent
  ]
})
export class MainUserSiteModule { }
