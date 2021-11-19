import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';





@Injectable({

  providedIn: 'root'

})

export class LoginApiService {



  url='https://odiswap.io/WebApi/api/users';
urlToken='https://odiswap.io/WebApi/api/Tokens'


  login_access:any;

  login_admin_access:any;



  constructor(private http:HttpClient) { }
    


  getLoginData(){

    return this.http.get(this.url);

  }

  CheckLogin(email:any , passw:any){

    return this.http.get(this.url+'/'+email+'/'+passw);

  }

  SaveUserData(data:any){

    return this.http.post(this.url,data)

  }

  GetValueForLoginAccess(val:any){

    val=JSON.parse(val);

    this.login_access=val

    

  }

  GetValueForLoginAccessAdmin(val:any){

    val=JSON.parse(val);

    this.login_admin_access=val

    

  }



  isUserRights():boolean{

    return this.login_access;



  }

  isAdminRights():boolean{

    return this.login_admin_access;



  }

  SaveTokenData(data:any){
    return this.http.post(this.urlToken,data)
  }  

}