import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import *  as $ from 'jquery'
import { DataCommunicationService } from '../../data-communication.service';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { LoginApiService } from '../login-api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
  
})
export class CalculatorComponent implements OnInit {
  @ViewChild('close_modal') close_modal: any
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
  

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private _obj: LoginApiService, private router: Router, private Location: Location, private router2: ActivatedRoute,
    private passData:DataCommunicationService) { }
   
  form:any =  FormGroup
  form2:any =  FormGroup
  yearGerman: any
  monthlyLoanInstallmentGerman: any
  yearlyIncomeGerman: any
  sliderValueGerman = 75
  grossMonthlyIncomeGerman: any
  monthlyRentGerman: any
  insuranceGerman: any
  divisionGerman: any
  perDisabilityGerman: any

  displayGer1 = ''
  displayGer2 = 'none'
  displayGer3 = 'none'

  displayEng1 = 'none'
  displayEng2 = 'none'
  displayEng3 = 'none'

  styleGer = [
    {
      background: 'orange',
      shadow: '0px 0px 10px'
    }
  ]
  styleEng = [
    {
      background: '',
      shadow: ''
    }
  ]

  germanFormValues = [
    {
      dayGerman: '',
      monthGerman: '',
      yearGerman: '',
      salaryGerman: '',
      monthlyRateGerman: ''

    }
  ]


  ngOnInit(): void {

    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    sessionStorage.setItem('_showMoreFeatures2','none')
    this.passData.passData()

    this.form = this.formBuilder.group({
      dayGerman: ['',{
        validators: [Validators.required]
      }],
      monthGerman: ['', {
        validators: [Validators.required]
      }],
      yearGerman: ['', {
        validators: [Validators.required]
      }],
      salaryGerman: ['',{
        validators: [Validators.required]
      }],
      // monthlyRateGerman: ['',{
      //   validators: [Validators.required]
      // }],
      question1german: ['',{
        validators: [Validators.required]
      }],
      question2german: ['',{
        validators: [Validators.required]
      }],
    })

    this.form2 = this.formBuilder.group({
      dayEnglish: ['',{
        validators: [Validators.required]
      }],
      monthEnglish: ['', {
        validators: [Validators.required]
      }],
      yearEnglish: ['', {
        validators: [Validators.required]
      }],
      salaryEnglish: ['',{
        validators: [Validators.required]
      }],
      // monthlyRateEnglish: ['',{
      //   validators: [Validators.required]
      // }],
      question1english: ['',{
        validators: [Validators.required]
      }],
      question2english: ['',{
        validators: [Validators.required]
      }],
    })
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
      //  new
      sessionStorage.setItem('_showMoreFeatures2', 'none')
      sessionStorage.setItem('_hideLogin', '')
      sessionStorage.setItem('_username', '')
      sessionStorage.setItem('_email', '')
      sessionStorage.setItem('_tokenid', '')
      sessionStorage.setItem('_login_access', this.login_access)
      this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures')
      //  new
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
          sessionStorage.setItem('_showMoreFeatures2', '')
          sessionStorage.setItem('_hideLogin', 'none')
          sessionStorage.setItem('_username', this.user_name)
          sessionStorage.setItem('_email', this.user_email)
          sessionStorage.setItem('_tokenid', this.user_token_id)
          this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures');
          this.showMoreFeatures2 = sessionStorage.getItem('_showMoreFeatures2');
          this.hideLogin = sessionStorage.getItem('_hideLogin');
          this.proceedEnglish = sessionStorage.getItem('_showMoreFeatures')
          this.proceedGerman = sessionStorage.getItem('_showMoreFeatures')


          this.router.navigate(['/buy-token']);
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

  GetSignUpValues(val: any) {

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



  }

  enableGerman() {
    this.styleGer = [
      {
        background: 'orange',
        shadow: '0px 0px 10px'
      }
    ]

    this.styleEng = [
      {
        background: '',
        shadow: ''
      }
    ]


    this.displayGer1 = ''
    this.displayGer2 = 'none'
    this.displayGer3 = 'none'

    this.displayEng1 = 'none'
    this.displayEng2 = 'none'
    this.displayEng3 = 'none'
  }

  enableEnglish() {
    this.styleGer = [
      {
        background: '',
        shadow: ''
      }
    ]

    this.styleEng = [
      {
        background: 'orange',
        shadow: '0px 0px 10px'
      }
    ]

    this.displayGer1 = 'none'
    this.displayGer2 = 'none'
    this.displayGer3 = 'none'

    this.displayEng1 = ''
    this.displayEng2 = 'none'
    this.displayEng3 = 'none'
  }

  maxDurationVBUPension = 0
  numberOfVBUAnnualPositions = 0
  capitalAtDBU = 0
  total = 0
  paymentMethod= 0

  firstYear = 0
  secondYear = 0
  thirdYear = 0
  fourthYear = 0
  fifthYear = 0
  averageYearsGerman = 0
  averageYearsGerman2 = ''
  average67Years = 0
  simple = 0.15
  percent = 0.075
  shareGerman:any
  monthlyGerman : any
  per_yearGerman : any
  imgGerman:any
  permDisabilityGerman:any
  yearlyIncomeGerman2 : any
  getDataGerman(value: NgForm) {

    if(value.value.question1german == '2' && value.value.question2german == '2')
    {
     
     
    console.log(value.value)
    this.germanFormValues[0].dayGerman = value.value.dayGerman
    this.germanFormValues[0].monthGerman = value.value.monthGerman
    this.germanFormValues[0].yearGerman = value.value.yearGerman
    this.germanFormValues[0].salaryGerman = value.value.salaryGerman
    this.germanFormValues[0].monthlyRateGerman = value.value.monthlyRateGerman

      this.yearlyIncomeGerman2 = this.germanFormValues[0].salaryGerman
      
      
     
        this.displayGer2 = ''
      this.displayGer1 = 'none'

      // calculating year
      var today = new Date();
      let newInsurance = 0
      var yyyy = today.getFullYear();

      this.yearGerman = yyyy - parseFloat(this.germanFormValues[0].yearGerman)

      // yearly income
      this.yearlyIncomeGerman = parseFloat(((+this.germanFormValues[0].salaryGerman)/12).toString()).toFixed(2)
      // monthlyLoanInstallment
      this.monthlyLoanInstallmentGerman = this.germanFormValues[0].monthlyRateGerman
      // gross monthly income
      this.grossMonthlyIncomeGerman = parseFloat((this.yearlyIncomeGerman / 12).toString()).toFixed(2)
      this.monthlyRentGerman = parseFloat(((+this.yearlyIncomeGerman/100)*this.sliderValueGerman).toString()).toFixed(2)

      this.insuranceGerman = ((this.yearlyIncomeGerman * 10) / 100).toString().slice(0, 8)
      this.divisionGerman = 12
      this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)
        this.shareGerman = this.sliderValueGerman
        this.permDisabilityGerman = parseFloat((this.monthlyRentGerman * 120).toString()).toFixed(2)

        if (this.sliderValueGerman >=69)
        {
          this.imgGerman = 'assets/img/69.jpg'
        }
        else if(this.sliderValueGerman >=60)
        {
          this.imgGerman = 'assets/img/60.jpg'
        }
        else if(this.sliderValueGerman >=50)
        {
          this.imgGerman = 'assets/img/50.jpg'
        }
        else if(this.sliderValueGerman >=30)
        {
          this.imgGerman = 'assets/img/30.jpg'
        }
        else if(this.sliderValueGerman >= 0)
        {
          this.imgGerman = 'assets/img/30.jpg'
        }
      if(this.yearGerman <= 58)
      {

        this.maxDurationVBUPension = 120
      }
        else if (this.yearGerman == 59)
        {
          this.maxDurationVBUPension == 108
        }
        else if (this.yearGerman == 60)
        {
          this.maxDurationVBUPension == 96
        }
        else if (this.yearGerman >= 61)
        {
          this.maxDurationVBUPension == 84
        }

        if (this.yearGerman <= 48)
        {
          this.numberOfVBUAnnualPositions = 10
       
        }
        else if (this.yearGerman == 49)
        {
          this.numberOfVBUAnnualPositions = 9
        }
        else if (this.yearGerman == 50)
        {
          this.numberOfVBUAnnualPositions = 8
        }
        else if (this.yearGerman == 51)
        {
          this.numberOfVBUAnnualPositions = 7
        }
        else if (this.yearGerman == 52)
        {
          this.numberOfVBUAnnualPositions = 6
        }
        else if (this.yearGerman == 53)
        {
          this.numberOfVBUAnnualPositions = 5
        }
        else if (this.yearGerman == 54)
        {
          this.numberOfVBUAnnualPositions = 4
        }
        else if (this.yearGerman == 55)
        {
          this.numberOfVBUAnnualPositions = 3
        }
        else if (this.yearGerman == 56)
        {
          this.numberOfVBUAnnualPositions = 2
        }
        else if (this.yearGerman >= 57)
        {
          this.numberOfVBUAnnualPositions = 1
        }

      this.capitalAtDBU = this.maxDurationVBUPension * this.numberOfVBUAnnualPositions * 100
      this.total = this.capitalAtDBU + 120000
      this.paymentMethod = 12

      if (this.yearGerman == 18)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
        this.average67Years = 49.93
      }
      else if (this.yearGerman == 19)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
        this.average67Years = 50.43
      }
      else if (this.yearGerman == 20)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
        this.average67Years = 50.96
      }
      else if (this.yearGerman == 21)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
        this.average67Years = 51.51
      }
      else if (this.yearGerman == 22)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.average67Years = 52.08
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 23)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.average67Years = 52.68
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 24)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.average67Years = 53.31        

        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 25)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.average67Years = 53.97
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 26)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.12
        this.fifthYear = 25.12
        this.average67Years = 54.65
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 27)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.12
        this.fourthYear = 25.55
        this.fifthYear = 25.21
        this.average67Years = 55.37
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 28)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 25.55
        this.fourthYear = 26.06
        this.fifthYear = 25.40
        this.average67Years = 56.13
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 29)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.12
        this.thirdYear = 26.06
        this.fourthYear = 26.48
        this.fifthYear = 25.67
        this.average67Years = 56.92
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 30)
      {
        this.firstYear = 25.12/75
        this.secondYear = 25.55
        this.thirdYear = 26.48
        this.fourthYear = 26.99
        this.fifthYear = 26.04
        this.average67Years = 57.76
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
       
      }
      else if (this.yearGerman == 31)
      {
        this.firstYear = 25.55/75
        this.secondYear = 26.06
        this.thirdYear = 26.99
        this.fourthYear = 27.99
        this.fifthYear = 26.62
        this.average67Years = 58.64
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 32)
      {
        this.firstYear = 26.06/75
        this.secondYear = 26.48
        this.thirdYear = 27.99
        this.fourthYear = 28.69
        this.fifthYear = 27.24
        this.average67Years = 59.56
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 33)
      {
        this.firstYear = 26.48/75
        this.secondYear = 26.99
        this.thirdYear = 28.69
        this.fourthYear = 29.35
        this.fifthYear = 27.90
        this.average67Years = 60.52
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 34)
      {
        this.firstYear = 26.99/75
        this.secondYear = 27.99
        this.thirdYear = 29.35
        this.fourthYear = 30.17
        this.fifthYear = 28.64
        this.average67Years = 61.52
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 35)
      {
        this.firstYear = 27.99/75
        this.secondYear = 28.69
        this.thirdYear = 30.17
        this.fourthYear = 30.85
        this.fifthYear = 29.41
        this.average67Years = 62.57
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 36)
      {
        this.firstYear = 29.69/75
        this.secondYear = 29.35
        this.thirdYear = 30.85
        this.fourthYear = 31.54
        this.fifthYear = 30.12
        this.average67Years = 63.65
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 37)
      {
        this.firstYear = 29.35/75
        this.secondYear = 30.17
        this.thirdYear = 31.54
        this.fourthYear = 32.52
        this.fifthYear = 30.89
        this.average67Years = 64.77
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 38)
      {
        this.firstYear = 30.17/75
        this.secondYear = 30.85
        this.thirdYear = 32.52
        this.fourthYear = 34.25
        this.fifthYear = 31.86
        this.average67Years = 65.96
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 39)
      {
        this.firstYear = 30.85/75
        this.secondYear = 31.54
        this.thirdYear = 34.25
        this.fourthYear = 36.15
        this.fifthYear = 33.06
        this.average67Years = 67.19
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 40)
      {
        this.firstYear = 31.54/75
        this.secondYear = 32.52
        this.thirdYear = 36.15
        this.fourthYear = 38.01
        this.fifthYear = 34.49
        this.average67Years = 68.49
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 41)
      {
        this.firstYear = 32.52/75
        this.secondYear = 34.25
        this.thirdYear = 38.01
        this.fourthYear = 40.26
        this.fifthYear = 36.24
        this.average67Years = 69.86
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 42)
      {
        this.firstYear = 34.25/75
        this.secondYear = 36.15
        this.thirdYear = 40.26
        this.fourthYear = 43.21
        this.fifthYear = 38.38 
        this.average67Years = 71.29
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 43)
      {
        this.firstYear = 36.15/75
        this.secondYear = 38.01
        this.thirdYear = 43.21
        this.fourthYear = 46.74
        this.fifthYear = 40.82
        this.average67Years = 72.77
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 44)
      {
        this.firstYear = 38.01/75
        this.secondYear = 40.26
        this.thirdYear = 46.74
        this.fourthYear = 50.74
        this.fifthYear = 43.69
        this.average67Years = 74.30
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 45)
      {
        this.firstYear = 40.26/75
        this.secondYear = 43.21
        this.thirdYear = 50.47
        this.fourthYear = 52.30
        this.fifthYear = 46.54
        this.average67Years = 75.88
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 46)
      {
        this.firstYear = 43.21/75
        this.secondYear = 46.47
        this.thirdYear = 52.30
        this.fourthYear = 54.70
        this.fifthYear = 49.43
        this.average67Years = 77.50
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 47)
      {
        this.firstYear = 46.47/75
        this.secondYear = 50.47
        this.thirdYear = 54.70
        this.fourthYear = 56.93
        this.fifthYear = 52.17
        this.average67Years = 79.13
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 48)
      {
        this.firstYear = 50.47/75
        this.secondYear = 52.30
        this.thirdYear = 56.93
        this.fourthYear = 59.25
        this.fifthYear = 54.73
        this.average67Years = 80.76
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 49)
      {
        this.firstYear = 52.30/75
        this.secondYear = 54.70
        this.thirdYear = 59.25
        this.fourthYear = 62.56
        this.fifthYear = 57.15
        this.average67Years = 82.36
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 50)
      {
        this.firstYear = 54.70/75
        this.secondYear = 56.93
        this.thirdYear = 62.56
        this.fourthYear = 65.34
        this.fifthYear = 59.76
        this.average67Years = 84.03
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 51)
      {
        this.firstYear = 56.93/75
        this.secondYear = 59.25
        this.thirdYear = 65.34
        this.fourthYear = 67.84
        this.fifthYear = 62.38
        this.average67Years = 85.75
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 52)
      {
        this.firstYear = 59.25/75
        this.secondYear = 62.56
        this.thirdYear = 67.84
        this.fourthYear = 69.98
        this.fifthYear = 64.99
        this.average67Years = 87.55
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 53)
      {
        this.firstYear = 62.56/75
        this.secondYear = 65.34
        this.thirdYear = 69.98
        this.fourthYear = 71.44
        this.fifthYear = 67.43
        this.average67Years = 89.44
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 54)
      {
        this.firstYear = 65.34/75
        this.secondYear = 67.84
        this.thirdYear = 71.44
        this.fourthYear = 72.13
        this.fifthYear = 69.34
        this.average67Years = 91.36
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 55)
      {
        this.firstYear = 67.84/75
        this.secondYear = 69.98
        this.thirdYear = 72.13
        this.fourthYear = 76.76
        this.fifthYear = 71.63
        this.average67Years = 93.36
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 56)
      {
        this.firstYear = 69.98/75
        this.secondYear = 71.44
        this.thirdYear = 76.76
        this.fourthYear = 82.62
        this.fifthYear = 74.59
        this.average67Years = 95.49
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 57)
      {
        this.firstYear = 71.44/75
        this.secondYear = 72.13
        this.thirdYear = 82.62
        this.fourthYear = 96.68
        this.fifthYear = 79.93
        this.average67Years = 97.81
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 58)
      {
        this.firstYear = 72.13/75
        this.secondYear = 76.76
        this.thirdYear = 96.68
        this.fourthYear = 101.18
        this.fifthYear =  85.87
        this.average67Years = 100.44
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 59)
      {
        this.firstYear = 76.76/75
        this.secondYear = 82.62
        this.thirdYear = 101.18
        this.fourthYear = 106.74
        this.fifthYear = 92.80
        this.average67Years = 103.59
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 60)
      {
        this.firstYear = 82.62/75
        this.secondYear = 96.68
        this.thirdYear = 106.74
        this.fourthYear = 108.33
        this.fifthYear = 99.11
        this.average67Years = 106.94
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 61)
      {
        this.firstYear = 96.68/75
        this.secondYear = 101.18
        this.thirdYear = 108.33
        this.fourthYear = 117.34
        this.fifthYear = 106.05
        this.average67Years = 110.42
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 62)
      {
        this.firstYear = 101.18/75
        this.secondYear = 106.74
        this.thirdYear = 117.34
        this.fourthYear = 119.25
        this.fifthYear = 110.57
        this.average67Years = 112.71
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 63)
      {
        this.firstYear = 106.74/75
        this.secondYear = 108.33
        this.thirdYear = 119.25
        this.fourthYear = 123.39
        this.fifthYear = 115.01
        this.average67Years = 115.01
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 64)
      {
        this.firstYear = 108.33/75
        this.secondYear = 117.34
        this.thirdYear = 123.39
        this.fourthYear = 0
        this.fifthYear = 117.08
        this.average67Years = 117.08
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 65)
      {
        this.firstYear = 117.34/75
        this.secondYear = 119.25
        this.thirdYear = 0
        this.fourthYear = 0
        this.fifthYear = 119.99
        this.average67Years = 119.99
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 66)
      {
        this.firstYear = 119.25/75
        this.secondYear = 123.39
        this.thirdYear = 0
        this.fourthYear = 0
        this.fifthYear = 121.32
        this.average67Years = 121.32
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman >= 67)
      {
        this.firstYear = 123.39/75
        this.secondYear = 0
        this.thirdYear = 0
        this.fourthYear = 0
        this.fifthYear = 123.39
        this.average67Years = 123.39
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      let newValueGerman = this.firstYear * this.sliderValueGerman
      this.averageYearsGerman2 = parseFloat(this.averageYearsGerman.toString()).toFixed(2)
      this.monthlyGerman =parseFloat(((newValueGerman/this.simple) * (1 + this.percent)).toString()).toFixed(2)
      this.per_yearGerman =parseFloat(((parseFloat(this.monthlyGerman) * 12) * (this.monthlyRentGerman/1000)).toString()).toFixed(2)
      
      
  
    }

    else 
    {
      this._snackBar.open('du darfst nicht !', "", {
        duration: 3000,
        horizontalPosition:'center',
          
      });

           
    }

  }

  showDataGerman() {
    this.displayGer2 = 'none'
    this.displayGer1 = ''
  }
proceedGerman = sessionStorage.getItem('_showMoreFeatures')
  showWelcome() {
    if(this.proceedGerman == null || this.proceedGerman == 'none')
    {
    this.modal = 'modal'
    this.login_popup = '#login-popup'
    console.log('i am here')
    }
    else{

      this.displayGer2 = 'none'
      this.displayGer1 = 'none'
      this.displayGer3 = ''

    }
  }
  showMain() {
    this.displayGer3 = 'none'
    this.displayGer2 = ''
  }


  sliderValueEnglish = 75
  getSlider(event: any) {
    this.sliderValueGerman = event.target.value
    if (this.sliderValueGerman > 75)
    {
      this.sliderValueGerman = 75
    }
    else{
      this.sliderValueGerman = event.target.value
    }

    if(this.sliderValueGerman >= 69 )
    {
      this.imgGerman= 'assets/img/69.jpg'
    }
    else if(this.sliderValueGerman >= 60)
    {
      this.imgGerman = 'assets/img/60.jpg'
    }
    else if(this.sliderValueGerman >= 50)
    {
      this.imgGerman = 'assets/img/50.jpg'
    }
    else if(this.sliderValueGerman >= 30)
    {
      this.imgGerman = 'assets/img/30.jpg'
    }

    let newValueGerman = this.firstYear * this.sliderValueGerman
    this.averageYearsGerman2 = parseFloat(this.averageYearsGerman.toString()).toFixed(2)
    this.monthlyGerman =parseFloat(((newValueGerman/this.simple) * (1 + this.percent)).toString()).toFixed(2)
    this.per_yearGerman =parseFloat(((parseFloat(this.monthlyGerman) * 12) * (this.monthlyRentGerman/1000)).toString()).toFixed(2)
    

    this.monthlyRentGerman = parseFloat(((this.yearlyIncomeGerman/100)*this.sliderValueGerman).toString()).toFixed(2)
    // this.monthlyRentGerman = ((this.yearlyIncomeGerman / 100) * this.sliderValueGerman).toString().slice(0, 9)
    this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)
    this.shareGerman = this.sliderValueGerman
    this.permDisabilityGerman = parseFloat((this.monthlyRentGerman * 120).toString()).toFixed(2)
  }
  getSliderEng(event: any) {
    this.sliderValueEnglish = event.target.value
    if (this.sliderValueEnglish > 75)
    {
      this.sliderValueEnglish = 75
    }
    else{
      this.sliderValueEnglish = event.target.value
    }
    this.shareEnglish = this.sliderValueEnglish
    if(this.sliderValueEnglish >= 69 )
    {
      this.imgEnglish = 'assets/img/69.jpg'
    }
    else if(this.sliderValueEnglish >= 60)
    {
      this.imgEnglish = 'assets/img/60.jpg'
    }
    else if(this.sliderValueEnglish >= 50)
    {
      this.imgEnglish = 'assets/img/50.jpg'
    }
    else if(this.sliderValueEnglish >= 30)
    {
      this.imgEnglish = 'assets/img/30.jpg'
    }
    let newValue = this.firstYearEnglish * this.sliderValueEnglish
this.average67YearsEnglish2 = parseFloat(this.averageYearsEnglish.toString()).toFixed(2)
this.monthlyEnglish = parseFloat(((newValue/this.simple) * (1 + this.percent)).toString()).toFixed(2)
this.per_yearEnglish =parseFloat((((parseFloat(this.monthlyEnglish) * 12) * (this.monthlyRentEnglish/1000))).toString()).toFixed(2)

    this.monthlyRentEnglish = parseFloat(((this.yearlyIncomeEnglish/100)*this.sliderValueEnglish).toString()).toFixed(2)
    // this.monthlyRentGerman = ((this.yearlyIncomeGerman / 100) * this.sliderValueGerman).toString().slice(0, 9)
    this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)
    this.permDisabilityEngish = parseFloat((this.monthlyRentEnglish * 120).toString()).toFixed(2)
  }

  conditionsGerman(value: any) {
    if (value == 12) {
      this.divisionGerman = 12
    }
    if (value == 4) {
      this.divisionGerman = 4
    }
    if (value == 2) {
      this.divisionGerman = 2
    }
    if (value == 1) {
      this.divisionGerman =  1
    }

  }
  conditions(value: any) {
    if (value == 12) {
      this.divisionEnglish = 12
    }
    if (value == 4) {
      this.divisionEnglish = 4
    }
    if (value == 2) {
      this.divisionEnglish = 2
    }
    if (value == 1) {
      this.divisionEnglish =  1
    }

  }
  englishFormValues = [
    {
      dayEnglish: '',
      monthEnglish: '',
      yearEnglish: '',
      salaryEnglish: '',
      monthlyRateEnglish: ''

    }
  ]

  maxDurationVBUPensionEnglish = 0
  numberOfVBUAnnualPositionsEnglish = 0
  capitalAtDBUEnglish = 0
  totalEnglish = 0
  paymentMethodEnglish= 0

  firstYearEnglish = 0
  secondYearEnglish = 0
  thirdYearEnglish = 0
  fourthYearEnglish = 0
  fifthYearEnglish = 0
  averageYearsEnglish = 0
  average67YearsEnglish = 0
  average67YearsEnglish2:string =''

  yearEnglish: any
  monthlyLoanInstallmentEnglish : any
  yearlyIncomeEnglish: any

  grossMonthlyIncomeEnglish: any
  monthlyRentEnglish: any
  insuranceEnglish: any
  divisionEnglish:any
  monthlyEnglish : any
  per_yearEnglish :any
 imgEnglish:any
  shareEnglish:any
 permDisabilityEngish : any
 yearlyIncomeEnglish2 : any
  calculateEng(value:NgForm)

  {
    if(value.value.question1english == '2' && value.value.question2english == '2')
    {

  console.log(value.value)
  this.displayEng1 ='none'
  this.displayEng2 = ''
  this.displayEng3 ='none'

  this.displayGer1 ='none'
  this.displayGer2 = 'none'
  this.displayGer3 = 'none'

  this.englishFormValues[0].dayEnglish = value.value.dayEnglish
  this.englishFormValues[0].monthEnglish = value.value.monthEnglish
  this.englishFormValues[0].yearEnglish = value.value.yearEnglish
  this.englishFormValues[0].salaryEnglish = value.value.salaryEnglish
  this.englishFormValues[0].monthlyRateEnglish = value.value.monthlyRateEnglish
    this.yearlyIncomeEnglish2 = this.englishFormValues[0].salaryEnglish



    // calculating year
    var today = new Date();
    let newInsurance = 0
    var yyyy = today.getFullYear();

    this.yearEnglish = yyyy - parseFloat(this.englishFormValues[0].yearEnglish)

    // yearly income
    this.yearlyIncomeEnglish =parseFloat(((+this.englishFormValues[0].salaryEnglish)/12).toString()).toFixed(2)

    // monthlyLoanInstallment
    this.monthlyLoanInstallmentEnglish = this.englishFormValues[0].monthlyRateEnglish
    console.log('mmmm ',this.monthlyLoanInstallmentEnglish )
    // gross monthly income
    this.grossMonthlyIncomeEnglish = (this.yearlyIncomeEnglish / 12).toString().slice(0, 8)
    this.monthlyRentEnglish = parseFloat(((this.yearlyIncomeEnglish/100)*this.sliderValueEnglish).toString()).toFixed(2)

    this.insuranceEnglish = ((this.yearlyIncomeEnglish * 10) / 100).toString().slice(0, 6)
    this.shareEnglish = this.sliderValueEnglish
    this.divisionEnglish = 12
    this.permDisabilityEngish = parseFloat((this.monthlyRentEnglish * 120).toString()).toFixed(2)
    // this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)
      if(this.sliderValueEnglish >= 69 )
      {
        this.imgEnglish = 'assets/img/69.jpg'
      }
      else if(this.sliderValueEnglish >= 60)
      {
        this.imgEnglish = 'assets/img/60.jpg'
      }
      else if(this.sliderValueEnglish >= 50)
      {
        this.imgEnglish = 'assets/img/50.jpg'
      }
      else if(this.sliderValueEnglish >= 30)
      {
        this.imgEnglish = 'assets/img/30.jpg'
      }
    if(this.yearEnglish <= 58)
    {

      this.maxDurationVBUPensionEnglish = 120
    }
      else if (this.yearEnglish == 59)
      {
        this.maxDurationVBUPensionEnglish == 108
      }
      else if (this.yearEnglish == 60)
      {
        this.maxDurationVBUPensionEnglish == 96
      }
      else if (this.yearEnglish >= 61)
      {
        this.maxDurationVBUPensionEnglish == 84
      }

      if (this.yearEnglish <= 48)
      {
        this.numberOfVBUAnnualPositionsEnglish = 10
     
      }
      else if (this.yearEnglish == 49)
      {
        this.numberOfVBUAnnualPositionsEnglish = 9
      }
      else if (this.yearEnglish == 50)
      {
        this.numberOfVBUAnnualPositionsEnglish = 8
      }
      else if (this.yearEnglish == 51)
      {
        this.numberOfVBUAnnualPositionsEnglish = 7
      }
      else if (this.yearGerman == 52)
      {
        this.numberOfVBUAnnualPositions = 6
      }
      else if (this.yearEnglish == 53)
      {
        this.numberOfVBUAnnualPositionsEnglish = 5
      }
      else if (this.yearEnglish == 54)
      {
        this.numberOfVBUAnnualPositionsEnglish = 4
      }
      else if (this.yearEnglish == 55)
      {
        this.numberOfVBUAnnualPositionsEnglish = 3
      }
      else if (this.yearEnglish == 56)
      {
        this.numberOfVBUAnnualPositionsEnglish = 2
      }
      else if (this.yearEnglish >= 57)
      {
        this.numberOfVBUAnnualPositionsEnglish = 1
      }
    
    

    this.capitalAtDBUEnglish = this.maxDurationVBUPensionEnglish * this.numberOfVBUAnnualPositionsEnglish * 100
    this.totalEnglish = this.capitalAtDBUEnglish + 120000
    this.paymentMethodEnglish = 12


 
    if (this.yearEnglish == 18)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
      this.average67YearsEnglish = 49.93
    }
    else if (this.yearEnglish == 19)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
      this.average67YearsEnglish = 50.43
    }
    else if (this.yearEnglish == 20)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
      this.average67YearsEnglish = 50.96
    }
    else if (this.yearEnglish == 21)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
      this.average67YearsEnglish = 51.51
    }
    else if (this.yearEnglish == 22)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.average67YearsEnglish = 52.08
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 23)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.average67YearsEnglish = 52.68
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 24)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.average67YearsEnglish = 53.31        

      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 25)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.average67YearsEnglish = 53.97
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 26)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.12
      this.fifthYearEnglish = 25.12
      this.average67YearsEnglish = 54.65
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 27)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.12
      this.fourthYearEnglish = 25.55
      this.fifthYearEnglish = 25.21
      this.average67YearsEnglish = 55.37
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 28)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 25.55
      this.fourthYearEnglish = 26.06
      this.fifthYearEnglish = 25.40
      this.average67YearsEnglish = 56.13
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 29)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.12
      this.thirdYearEnglish = 26.06
      this.fourthYearEnglish = 26.48
      this.fifthYearEnglish = 25.67
      this.average67YearsEnglish = 56.92
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 30)
    {
      this.firstYearEnglish = 25.12/75
      this.secondYearEnglish = 25.55
      this.thirdYearEnglish = 26.48
      this.fourthYearEnglish = 26.99
      this.fifthYearEnglish = 26.04
      this.average67YearsEnglish = 57.76
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
     
    }
    else if (this.yearEnglish == 31)
    {
      this.firstYearEnglish = 25.55/75
      this.secondYearEnglish = 26.06
      this.thirdYearEnglish = 26.99
      this.fourthYearEnglish = 27.99
      this.fifthYearEnglish = 26.62
      this.average67YearsEnglish = 58.64
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 32)
    {
      this.firstYearEnglish = 26.06/75
      this.secondYearEnglish = 26.48
      this.thirdYearEnglish = 27.99
      this.fourthYearEnglish = 28.69
      this.fifthYearEnglish = 27.24
      this.average67YearsEnglish = 59.56
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 33)
    {
      this.firstYearEnglish = 26.48/75
      this.secondYearEnglish = 26.99
      this.thirdYearEnglish = 28.69
      this.fourthYearEnglish = 29.35
      this.fifthYearEnglish = 27.90
      this.average67YearsEnglish = 60.52
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 34)
    {
      this.firstYearEnglish = 26.99/75
      this.secondYearEnglish = 27.99
      this.thirdYearEnglish = 29.35
      this.fourthYearEnglish = 30.17
      this.fifthYearEnglish = 28.64
      this.average67YearsEnglish = 61.52
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 35)
    {
      this.firstYearEnglish = 27.99/75
      this.secondYearEnglish = 28.69
      this.thirdYearEnglish = 30.17
      this.fourthYearEnglish = 30.85
      this.fifthYearEnglish = 29.41
      this.average67YearsEnglish = 62.57
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 36)
    {
      this.firstYearEnglish = 29.69/75
      this.secondYearEnglish = 29.35
      this.thirdYearEnglish = 30.85
      this.fourthYearEnglish = 31.54
      this.fifthYearEnglish = 30.12
      this.average67YearsEnglish = 63.65
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 37)
    {
      this.firstYearEnglish = 29.35/75
      this.secondYearEnglish = 30.17
      this.thirdYearEnglish = 31.54
      this.fourthYearEnglish = 32.52
      this.fifthYearEnglish = 30.89
      this.average67YearsEnglish = 64.77
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 38)
    {
      this.firstYearEnglish = 30.17/75
      this.secondYearEnglish = 30.85
      this.thirdYearEnglish = 32.52
      this.fourthYearEnglish = 34.25
      this.fifthYearEnglish = 31.86
      this.average67YearsEnglish = 65.96
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 39)
    {
      this.firstYearEnglish = 30.85/75
      this.secondYearEnglish = 31.54
      this.thirdYearEnglish = 34.25
      this.fourthYearEnglish = 36.15
      this.fifthYearEnglish = 33.06
      this.average67YearsEnglish = 67.19
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 40)
    {
      this.firstYearEnglish = 31.54/75
      this.secondYearEnglish = 32.52
      this.thirdYearEnglish = 36.15
      this.fourthYearEnglish = 38.01
      this.fifthYearEnglish = 34.49
      this.average67YearsEnglish = 68.49
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 41)
    {
      this.firstYearEnglish = 32.52/75
      this.secondYearEnglish = 34.25
      this.thirdYearEnglish = 38.01
      this.fourthYearEnglish = 40.26
      this.fifthYearEnglish = 36.24
      this.average67YearsEnglish = 69.86
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 42)
    {
      this.firstYearEnglish = 34.25/75
      this.secondYearEnglish = 36.15
      this.thirdYearEnglish = 40.26
      this.fourthYearEnglish = 43.21
      this.fifthYearEnglish = 38.38 
      this.average67YearsEnglish = 71.29
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 43)
    {
      this.firstYearEnglish = 36.15/75
      this.secondYearEnglish = 38.01
      this.thirdYearEnglish = 43.21
      this.fourthYearEnglish = 46.74
      this.fifthYearEnglish = 40.82
      this.average67YearsEnglish = 72.77
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 44)
    {
      this.firstYearEnglish = 38.01/75
      this.secondYearEnglish = 40.26
      this.thirdYearEnglish = 46.74
      this.fourthYearEnglish = 50.74
      this.fifthYearEnglish = 43.69
      this.average67YearsEnglish = 74.30
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 45)
    {
      this.firstYearEnglish = 40.26/75
      this.secondYearEnglish = 43.21
      this.thirdYearEnglish = 50.47
      this.fourthYearEnglish = 52.30
      this.fifthYearEnglish = 46.54
      this.average67YearsEnglish = 75.88
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 46)
    {
      this.firstYearEnglish = 43.21/75
      this.secondYearEnglish = 46.47
      this.thirdYearEnglish = 52.30
      this.fourthYearEnglish = 54.70
      this.fifthYearEnglish = 49.43
      this.average67YearsEnglish = 77.50
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 47)
    {
      this.firstYearEnglish = 46.47/75
      this.secondYearEnglish = 50.47
      this.thirdYearEnglish = 54.70
      this.fourthYearEnglish = 56.93
      this.fifthYearEnglish = 52.17
      this.average67YearsEnglish = 79.13
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 48)
    {
      this.firstYearEnglish = 50.47/75
      this.secondYearEnglish = 52.30
      this.thirdYearEnglish = 56.93
      this.fourthYearEnglish = 59.25
      this.fifthYearEnglish = 54.73
      this.average67YearsEnglish = 80.76
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 49)
    {
      this.firstYearEnglish = 52.30/75
      this.secondYearEnglish = 54.70
      this.thirdYearEnglish = 59.25
      this.fourthYearEnglish = 62.56
      this.fifthYearEnglish = 57.15
      this.average67YearsEnglish = 82.36
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 50)
    {
      this.firstYearEnglish = 54.70/75
      this.secondYearEnglish = 56.93
      this.thirdYearEnglish = 62.56
      this.fourthYearEnglish = 65.34
      this.fifthYearEnglish = 59.76
      this.average67YearsEnglish = 84.03
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 51)
    {
      this.firstYearEnglish = 56.93/75
      this.secondYearEnglish = 59.25
      this.thirdYearEnglish = 65.34
      this.fourthYearEnglish = 67.84
      this.fifthYearEnglish = 62.38
      this.average67YearsEnglish = 85.75
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 52)
    {
      this.firstYearEnglish = 59.25/75
      this.secondYearEnglish = 62.56
      this.thirdYearEnglish = 67.84
      this.fourthYearEnglish = 69.98
      this.fifthYearEnglish = 64.99
      this.average67YearsEnglish = 87.55
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 53)
    {
      this.firstYearEnglish = 62.56/75
      this.secondYearEnglish = 65.34
      this.thirdYearEnglish = 69.98
      this.fourthYearEnglish = 71.44
      this.fifthYearEnglish = 67.43
      this.average67YearsEnglish = 89.44
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 54)
    {
      this.firstYearEnglish = 65.34/75
      this.secondYearEnglish = 67.84
      this.thirdYearEnglish = 71.44
      this.fourthYearEnglish = 72.13
      this.fifthYearEnglish = 69.34
      this.average67YearsEnglish = 91.36
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 55)
    {
      this.firstYearEnglish = 67.84/75
      this.secondYearEnglish = 69.98
      this.thirdYearEnglish = 72.13
      this.fourthYearEnglish = 76.76
      this.fifthYearEnglish = 71.63
      this.average67YearsEnglish = 93.36
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 56)
    {
      this.firstYearEnglish = 69.98/75
      this.secondYearEnglish = 71.44
      this.thirdYearEnglish = 76.76
      this.fourthYearEnglish = 82.62
      this.fifthYearEnglish = 74.59
      this.average67YearsEnglish = 95.49
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 57)
    {
      this.firstYearEnglish = 71.44/75
      this.secondYearEnglish = 72.13
      this.thirdYearEnglish = 82.62
      this.fourthYearEnglish = 96.68
      this.fifthYearEnglish = 79.93
      this.average67YearsEnglish = 97.81
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 58)
    {
      this.firstYearEnglish = 72.13/75
      this.secondYearEnglish = 76.76
      this.thirdYearEnglish = 96.68
      this.fourthYearEnglish = 101.18
      this.fifthYearEnglish =  85.87
      this.average67YearsEnglish = 100.44
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 59)
    {
      this.firstYearEnglish = 76.76/75
      this.secondYearEnglish = 82.62
      this.thirdYearEnglish = 101.18
      this.fourthYearEnglish = 106.74
      this.fifthYearEnglish = 92.80
      this.average67YearsEnglish = 103.59
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 60)
    {
      this.firstYearEnglish = 82.62/75
      this.secondYearEnglish = 96.68
      this.thirdYearEnglish = 106.74
      this.fourthYearEnglish = 108.33
      this.fifthYearEnglish = 99.11
      this.average67YearsEnglish = 106.94
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 61)
    {
      this.firstYearEnglish = 96.68/75
      this.secondYearEnglish = 101.18
      this.thirdYearEnglish = 108.33
      this.fourthYearEnglish = 117.34
      this.fifthYearEnglish = 106.05
      this.average67YearsEnglish = 110.42
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 62)
    {
      this.firstYearEnglish = 101.18/75
      this.secondYearEnglish = 106.74
      this.thirdYearEnglish = 117.34
      this.fourthYearEnglish = 119.25
      this.fifthYearEnglish = 110.57
      this.average67YearsEnglish = 112.71
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 63)
    {
      this.firstYearEnglish = 106.74/75
      this.secondYearEnglish = 108.33
      this.thirdYearEnglish = 119.25
      this.fourthYearEnglish = 123.39
      this.fifthYearEnglish = 115.01
      this.average67YearsEnglish = 115.01
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 64)
    {
      this.firstYearEnglish = 108.33/75
      this.secondYearEnglish = 117.34
      this.thirdYearEnglish = 123.39
      this.fourthYearEnglish = 0
      this.fifthYearEnglish = 117.08
      this.average67YearsEnglish = 117.08
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 65)
    {
      this.firstYearEnglish = 117.34/75
      this.secondYearEnglish = 119.25
      this.thirdYearEnglish = 0
      this.fourthYearEnglish = 0
      this.fifthYearEnglish = 119.99
      this.average67YearsEnglish = 119.99
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish == 66)
    {
      this.firstYearEnglish = 119.25/75
      this.secondYearEnglish = 123.39
      this.thirdYearEnglish = 0
      this.fourthYearEnglish = 0
      this.fifthYearEnglish = 121.32
      this.average67YearsEnglish = 121.32
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    else if (this.yearEnglish >= 67)
    {
      this.firstYearEnglish = 123.39/75
      this.secondYearEnglish = 0
      this.thirdYearEnglish = 0
      this.fourthYearEnglish = 0
      this.fifthYearEnglish = 123.39
      this.average67YearsEnglish = 123.39 
      this.averageYearsEnglish = (this.firstYearEnglish + this.secondYearEnglish + this.thirdYearEnglish + this.fourthYearEnglish + this.fourthYearEnglish)/5
    }
    
    let newValue = this.firstYearEnglish * this.sliderValueEnglish
this.average67YearsEnglish2 = parseFloat(this.averageYearsEnglish.toString()).toFixed(2)
this.monthlyEnglish = parseFloat(((newValue/this.simple) * (1 + this.percent)).toString()).toFixed(2)
this.per_yearEnglish =parseFloat((((parseFloat(this.monthlyEnglish) * 12) * (this.monthlyRentEnglish/1000))).toString()).toFixed(2)
    }
    else
    {
      this._snackBar.open('You are not allowed !', "", {
        duration: 3000,
  
      });
    }
  }

  abortEng()
  {
    this.displayEng2 = 'none'
    this.displayEng1 = ''
  }
proceedEnglish:any = sessionStorage.getItem('_showMoreFeatures')
modal = ''
login_popup = ''
  toLookEng()
  { 
    if(this.proceedEnglish==null || this.proceedEnglish == 'none')
    {
    this.modal = 'modal'
    this.login_popup = '#login-popup'
    }
    else
    {
      console.log('engggg',this.proceedEnglish)
      this.displayEng2 = 'none'
      this.displayEng3 = ''
    }
    
  }
  
  abortEng2()
  {
    this.displayEng3 ='none'
    this.displayEng2 =''
  }
 

  
}
