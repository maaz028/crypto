import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginApiService } from './login-api.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ActivateguardGuard implements CanActivate {
  constructor(private login_service:LoginApiService , private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(this.login_service.isUserRights()){
      return true;
    }
    else{
      swal.fire('Hey user!', 'you dont have permission to access this page', 'error',);
      this.route.navigate(['home']);
    }
    return false
  }

  
}
