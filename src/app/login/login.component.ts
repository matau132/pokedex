import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  info: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  onSubmit(formLogin) {
    this.info = formLogin.value;
  }
}
