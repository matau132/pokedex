import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isAuth(user): boolean {
    let users = [
      { username: 'admin', password: 'admin' },
      { username: 'admin2', password: 'admin2' },
    ];
    for (let data of users) {
      if (data.username == user.username && data.password == user.password) {
        return true;
      } else {
        return false;
      }
    }
  }
}
