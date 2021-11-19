import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { MainWindowRoutingModule } from './main-window-routing.module';
import { MainWindowComponent } from './main-window.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OdiTokensComponent } from './odi-tokens/odi-tokens.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { KycApplicationComponent } from './kyc-application/kyc-application.component';
import { MyTokenComponent } from './my-token/my-token.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminKYCComponent } from './admin-kyc/admin-kyc.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminICOComponent } from './admin-ico/admin-ico.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { AdminICOSettingComponent } from './admin-icosetting/admin-icosetting.component';
import { AdminWebsiteSettingComponent } from './admin-website-setting/admin-website-setting.component';
import { AdminReferalSettingComponent } from './admin-referal-setting/admin-referal-setting.component';
import { AdminMailingSettingComponent } from './admin-mailing-setting/admin-mailing-setting.component';
import { AdminPaymentMethodComponent } from './admin-payment-method/admin-payment-method.component';
import { AdminManagePagesComponent } from './admin-manage-pages/admin-manage-pages.component';
import { AdminApplicationApiComponent } from './admin-application-api/admin-application-api.component';
import { AdminManageLanguagesComponent } from './admin-manage-languages/admin-manage-languages.component';
import { ErrorComponent } from './error/error.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';


@NgModule({
  declarations: [
    MainWindowComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    OdiTokensComponent,
    FeaturesComponent,
    NewsComponent,
    CalculatorComponent,
    ContactUsComponent,
    DashboardComponent,
    BuyTokenComponent,
    TransactionsComponent,
    KycApplicationComponent,
    MyTokenComponent,
    AdminDashboardComponent,
    AdminKYCComponent,
    AdminUsersListComponent,
    AdminICOComponent,
    AdminTransactionsComponent,
    AdminICOSettingComponent,
    AdminWebsiteSettingComponent,
    AdminReferalSettingComponent,
    AdminMailingSettingComponent,
    AdminPaymentMethodComponent,
    AdminManagePagesComponent,
    AdminApplicationApiComponent,
    AdminManageLanguagesComponent,
    ErrorComponent,
    SignInComponent,
    SignUpComponent,
    MyPolicyComponent,
    
    
  ],
  imports: [
    CommonModule,
    MainWindowRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDividerModule,
    MatProgressSpinnerModule
    
  ],
  exports:
  [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MainWindowComponent
  
  ]
})
export class MainWindowModule { }
