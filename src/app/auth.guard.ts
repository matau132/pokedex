import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  flag;
  constructor(private auth: AuthService, private route: Router) {}

  canActivate(
  ): boolean {
    this.flag = localStorage.getItem('token');
    if (this.flag) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
