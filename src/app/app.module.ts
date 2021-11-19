import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserSiteModule } from './user-site/user-site.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSiteModule } from './main-site/main-site.module';
import { MainUserSiteModule } from './user-site/main-user-site/main-user-site.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainSiteModule,
    MainUserSiteModule,
    BrowserAnimationsModule,
    UserSiteModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
