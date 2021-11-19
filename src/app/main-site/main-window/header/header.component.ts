import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';


import { Observable } from 'rxjs';
import { LoginApiService } from '../login-api.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DataCommunicationService } from '../../data-communication.service';
import { data } from 'jquery';
import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('close_modal') close_modal: any
  @ViewChild('modal') modal:ElementRef


  spinner = 'none'
  button = ''
  showSidebar2 = 'none'
  showMoreFeaturesAdmin: any = 'none'
  showMoreFeaturesAdmin2: any = 'none'
  // showMoreFeaturesAdmin:any = sessionStorage.getItem('_showMoreFeaturesAdmin')

  Login_Data: any;
  Logged_Data: any;

  user_password: any;

  flag = true;

  loc: any;
  login_access: any = false;
  login_admin_access: any = false;
  url: any
  constructor(private _obj: LoginApiService, private router: Router, private Location: Location, private router2: ActivatedRoute,
    private communicate:DataCommunicationService
    ) {
    //   this.url = window.location.href.split('/')
    //   console.log(this.url)
    //  if(this.url[3]=='')
    //  {
    //   sessionStorage.setItem('_showMoreFeatures2','none')
    //    this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')
    //  }
    //  else if(this.url[4]=='home')
    //  {
    //   sessionStorage.setItem('_showMoreFeatures2','none')
    //   this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')
    //  }
    //   console.log('...............',sessionStorage.getItem('_showMoreFeatures'))
    //   if (sessionStorage.getItem('_showMoreFeatures')  == null )
    //  {
    //  console.log('i am in')


    //   sessionStorage.setItem('_showMoreFeatures','none')
    //   sessionStorage.setItem('_hideLogin','')
    //  }
    //  else{
    //    this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures');
    //    this.hideLogin = sessionStorage.getItem('_hideLogin')




    //  }

  }
  spinnerSignup = 'none'
  ngOnInit(): void {

    this.communicate.on().subscribe((data:any)=>
    {
      this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')
      this.showMoreFeaturesAdmin2 = sessionStorage.getItem('_showMoreFeaturesAdmin2')
    })
    this.communicate.on2().subscribe((data:any)=>
    {
     
      this.close_modal.nativeElement.className = 'modal fade show';
    })
    // this.showMoreFeatures2 = sessionStorage.getItem('_shoMoreFeatures2')
    

    if (sessionStorage.getItem('_showMoreFeaturesAdmin') == null) {
      sessionStorage.setItem('_showMoreFeaturesAdmin', 'none')
      this.showMoreFeaturesAdmin = sessionStorage.getItem('_showMoreFeaturesAdmin')
      sessionStorage.setItem('_showMoreFeaturesAdmin2', 'none')
      this.showMoreFeaturesAdmin2 = sessionStorage.getItem('_showMoreFeaturesAdmin2')
      sessionStorage.setItem('_hideLogin', '')
      this.hideLogin = sessionStorage.getItem('_hideLogin')
      sessionStorage.setItem('_username', '')
      sessionStorage.setItem('_email', '')
      sessionStorage.setItem('_tokenid', '')
      sessionStorage.setItem('_login_admin_access', this.login_admin_access)


    }
    this.showMoreFeaturesAdmin = sessionStorage.getItem('_showMoreFeaturesAdmin')
    this.showMoreFeaturesAdmin2 = sessionStorage.getItem('_showMoreFeaturesAdmin2')
    this._obj.GetValueForLoginAccessAdmin(sessionStorage.getItem('_login_admin_access'));



    if (sessionStorage.getItem('_showMoreFeatures') == null) {
      sessionStorage.setItem('_showMoreFeatures', 'none')
      sessionStorage.setItem('_showMoreFeatures2', 'none')
      sessionStorage.setItem('_hideLogin', '')
      sessionStorage.setItem('_username', '')
      sessionStorage.setItem('_email', '')
      sessionStorage.setItem('_tokenid', '')
      sessionStorage.setItem('_login_access', this.login_access)
      this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures')

      this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')
      this.hideLogin = sessionStorage.getItem('_hideLogin')

    }

    this._obj.GetValueForLoginAccess(sessionStorage.getItem('_login_access'));

  }
  user_token_id: any = sessionStorage.getItem('_tokenid')
  user_name: any = sessionStorage.getItem('_username');
  user_email: any = sessionStorage.getItem('_email');
  showMoreFeatures: any = sessionStorage.getItem('_showMoreFeatures')
  showMoreFeatures2: any = sessionStorage.getItem('_showMoreFeatures2')
  hideLogin: any = sessionStorage.getItem('_hideLogin')


  LogOut() {
    sessionStorage.clear()
    window.location.href = "";

  }

  @HostListener('document:click',['$event'])
  click(event)
  {
    if(this.modal.nativeElement.contains(event.target))
    {
      console.log('click inside')
    }
    else{
      this.showAccount = 'none'
     
    }
  }
  adminPanel = 'none'

  GetLoginValues(v: any) {
    this.button = 'none'
    this.spinner = 'block'
    this._obj.CheckLogin(v['Email'], v['Password']).subscribe(data => {
      this.Login_Data = data;


      if (this.Login_Data != null) {

        this.user_email = this.Login_Data[0]['vEmailID'];
        this.user_name = this.Login_Data[0]['vUserName'];
        this.user_token_id = this.Login_Data[0]['vTokenID']

        if (v['Email'] == 'abc@axtract.co.uk' && v['Password'] == 'p@ssword') {
          this.close_modal.nativeElement.click()
          sessionStorage.setItem('_showMoreFeaturesAdmin', '')
          this.showMoreFeaturesAdmin = sessionStorage.getItem('_showMoreFeaturesAdmin')
          // new version
          sessionStorage.setItem('_showMoreFeaturesAdmin2', '')
          this.showMoreFeaturesAdmin2 = sessionStorage.getItem('_showMoreFeaturesAdmin2')
          sessionStorage.setItem('_hideLogin', 'none')
          this.hideLogin = sessionStorage.getItem('_hideLogin');
          sessionStorage.setItem('_username', this.user_name)
          sessionStorage.setItem('_email', this.user_email)
          sessionStorage.setItem('_tokenid', this.user_token_id)
          this.login_admin_access = true
          sessionStorage.setItem('_login_admin_access', this.login_admin_access)
          this._obj.GetValueForLoginAccessAdmin(sessionStorage.getItem('_login_admin_access'));

          this.flag = false
          this.router.navigate(['admin/dashboard']);


        }
        else {
          this.close_modal.nativeElement.click()
          this.login_access = true
          sessionStorage.setItem('_login_access', this.login_access)
          this._obj.GetValueForLoginAccess(sessionStorage.getItem('_login_access'));
          sessionStorage.setItem('_showMoreFeatures', '')
          // sessionStorage.setItem('_showMoreFeatures2', '')
          sessionStorage.setItem('_hideLogin', 'none')
          sessionStorage.setItem('_username', this.user_name)
          sessionStorage.setItem('_email', this.user_email)
          sessionStorage.setItem('_tokenid', this.user_token_id)
          this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures');
          this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2');
          this.hideLogin = sessionStorage.getItem('_hideLogin');


          window.location.href = ''
          // this.router.navigate(['/dashboard']);
          //       // header will show ......
          this.flag = false;

        }
        this.button = ''
    this.spinner = 'none'

      }

      if (this.Login_Data == null) {

        swal.fire('Hey user!', 'Incorrect Credentials', 'error');
        this.button = ''
        this.spinner = 'none'

      }



    })






  }
showSignup = ''
  GetSignUpValues(val: any) {
    console.log(' iam right herer')
    this.spinnerSignup = ''
    this.showSignup = 'none'
    console.log(val);
    let check = true;
    this._obj.getLoginData().subscribe(data => {

      this.Logged_Data = data;
      for (let i = 0; i < this.Logged_Data.length; i++) {
        if (val['vEmailID'] == this.Logged_Data[i]['vEmailID']) {

          check = false;
          swal.fire('Hey user!', 'Email Already Exist', 'error')
            .then(() => {

              // window.location.href="";

            })

      
          break;
        }

      }
      if (check == true) {
        if (val['vRepeatPasswod'] == val['vPassword']) {
          this._obj.SaveUserData(val).subscribe((result: any) => {
            swal.fire('Hey user!', result, 'success')
              .then(() => {

                window.location.href = "";

              })

          })

        }
        if (val['vRepeatPasswod'] != val['vPassword']) {
          swal.fire('Hey user!', 'Password Mismatch', 'error',);
        
        }
      }



    })

    this.spinnerSignup = 'none'
    this.showSignup = ''

  }





  reloadSite() {
    window.location.href = ''
  }


  showSidebar = 'none'

  handleSidebar() {
    if (this.showSidebar == 'none') {
      this.showSidebar = ''
    }
    else {
      this.showSidebar = 'none'
    }
  }



  showAccount = 'none'
  handleAccount() {
    if (this.showAccount == 'none') {
      this.showAccount = ''
    }
    else {
      this.showAccount = 'none'
    }

  }

  handleSidebar2() {
    if (this.showSidebar2 == 'none') {
      this.showSidebar2 = ''
    }
    else {
      this.showSidebar2 = 'none'
    }
  }

  hideMoreFeatures() {
    sessionStorage.setItem('_showMoreFeatures2', 'none')
    window.location.href = ''
  }
  hideMoreFeatures2() {
    sessionStorage.setItem('_showMoreFeatures2', 'none')
    this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')

  }

  navigate()
  {
    this.router.navigate(['dashboard']);
    sessionStorage.setItem('_showMoreFeatures2','')
    this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2')
  }
  adminDashboard()
  {
    this.router.navigate(['admin/dashboard']);
    sessionStorage.setItem('_showMoreFeaturesAdmin2','')
    this.showMoreFeaturesAdmin2 = sessionStorage.getItem('_showMoreFeaturesAdmin2')
  }
}













