import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { KycApplicationComponent } from './kyc-application/kyc-application.component';
import { MainWindowComponent } from './main-window.component';
import { MyTokenComponent } from './my-token/my-token.component';
import { NewsComponent } from './news/news.component';
import { OdiTokensComponent } from './odi-tokens/odi-tokens.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ActivateguardGuard } from './activateguard.guard';
import { ActivateGuardAdminGuard } from './activate-guard-admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminApplicationApiComponent } from './admin-application-api/admin-application-api.component';
import { AdminICOComponent } from './admin-ico/admin-ico.component';
import { AdminICOSettingComponent } from './admin-icosetting/admin-icosetting.component';
import { AdminKYCComponent } from './admin-kyc/admin-kyc.component';
import { AdminMailingSettingComponent } from './admin-mailing-setting/admin-mailing-setting.component';
import { AdminManageLanguagesComponent } from './admin-manage-languages/admin-manage-languages.component';
import { AdminManagePagesComponent } from './admin-manage-pages/admin-manage-pages.component';
import { AdminPaymentMethodComponent } from './admin-payment-method/admin-payment-method.component';
import { AdminReferalSettingComponent } from './admin-referal-setting/admin-referal-setting.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminWebsiteSettingComponent } from './admin-website-setting/admin-website-setting.component';
import { ErrorComponent } from './error/error.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';

const routes: Routes = [
  {
    path:'sign-in',
    component:SignInComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },

{
  path:'about',
  component:AboutComponent,
  data:{title:'ODI Crypto - About'}
},
{
  path:'home',
  component:HomeComponent,
  data:{title:'ODI Crypto - Home'}
},
{
  path:'odi-tokens',
  component:OdiTokensComponent,
  data:{title:'ODI Crypto - ODI Tokens'}
},
{
  path:'features',
  component:FeaturesComponent,
  data:{title:'ODI Crypto - Features'}
},
{
  path:'calculator',
  component:CalculatorComponent,
  data:{title:'ODI Crypto - Calculator'}
},
{
  path:'contact-us',
  component:ContactUsComponent,
  data:{title:'ODI Crypto - Contact'}
},
{
  path:'news',
  component:NewsComponent,
  data:{title:'ODI Crypto - News'}
},
{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - Dashboard'}
},
{
  path:'buy-token',
  component:BuyTokenComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - Buy Token'}
},
{
  path:'transactions',
  component:TransactionsComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - Transactions'}
},
{
  path:'profile',
  component:ProfileComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - Profile'}
},
{
  path:'my-token',
  component:MyTokenComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - My Token'}
},
{
  path:'kyc-application',
  component:KycApplicationComponent,
  canActivate:[ActivateguardGuard],
  data:{title:'User - KYC Application'}
},

{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'admin/dashboard',
  component:AdminDashboardComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin - Dashboard'}
},
{
  path:'admin/setting/application-api',
  component:AdminApplicationApiComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin - Application Api'}
},
{
  path:'admin/ico',
  component:AdminICOComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin - ICO'}
},
{
  path:'admin/setting/ico',
  component:AdminICOSettingComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  ICO'}
},
{
  path:'admin/kyc',
  component:AdminKYCComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin - KYC'}
},
{
  path:"admin/setting/mailing",
  component:AdminMailingSettingComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Mailing'}
},
{
  path:"admin/setting/manage-languages",
  component:AdminManageLanguagesComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Manage Languages'}
},
{
  path:"admin/setting/manage-pages",
  component:AdminManagePagesComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Manage Pages'}
},
{
  path:"admin/setting/payment-method",
  component:AdminPaymentMethodComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin - Payment Method'}
},
{path:"admin/setting/referal",
component:AdminReferalSettingComponent,
canActivate:[ActivateGuardAdminGuard ],
data:{title:'Admin -  Referal'}
},
{
  path:'admin/transactions',
  component:AdminTransactionsComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Transactions'}

},
{
  path:"admin/users-list",
  component:AdminUsersListComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Users List'}
},
{
  path:"admin/setting/website",
  component:AdminWebsiteSettingComponent,
  canActivate:[ActivateGuardAdminGuard ],
  data:{title:'Admin -  Website'}
},
{
  path:'my-policy',
  component:MyPolicyComponent
},

{
  path:'**',
  component:ErrorComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainWindowRoutingModule { }
