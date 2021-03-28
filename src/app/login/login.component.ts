import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  info: any;
  constructor(private auth: AuthService,private router:Router) {}

  ngOnInit(): void {}
  onSubmit(formLogin) {
    localStorage.setItem('token','xx.yy.zz');
    this.router.navigate(['/pokemon']);
  }
}
