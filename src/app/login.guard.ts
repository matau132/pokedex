import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  flag;
  constructor(private route: Router) {

  }
  canActivate() {
    this.flag = localStorage.getItem('token');
    if (this.flag) {
      this.route.navigate(['/pokemon']);
      return false;
    }
    else {
      return true;
    }
  }

}
