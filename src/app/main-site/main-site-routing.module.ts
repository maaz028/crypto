import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSiteComponent } from './main-site.component';
import { MainWindowComponent } from './main-window/main-window.component';

const routes: Routes = [{ path: '', component: MainWindowComponent }, { path: 'main-window', loadChildren: () => import('./main-window/main-window.module').then(m => m.MainWindowModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSiteRoutingModule { }
