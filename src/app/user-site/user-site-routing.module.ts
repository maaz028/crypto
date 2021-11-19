import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSiteComponent } from './user-site.component';

const routes: Routes = [{ path: '', component: UserSiteComponent }, { path: 'main-user-site', loadChildren: () => import('./main-user-site/main-user-site.module').then(m => m.MainUserSiteModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSiteRoutingModule { }
