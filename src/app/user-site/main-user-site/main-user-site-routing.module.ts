import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserSiteComponent } from './main-user-site.component';

const routes: Routes = [{ path: '', component: MainUserSiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainUserSiteRoutingModule { }
