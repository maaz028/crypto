import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'main-site', loadChildren: () => import('./main-site/main-site.module').then(m => m.MainSiteModule) },
{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{ path: 'user-site', loadChildren: () => import('./user-site/user-site.module').then(m => m.UserSiteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
