import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentRoute: string;
  title = 'angularDemo';
  constructor(private route: Router) {
    console.log(window.location.href);
  }
  navChange(e) {
    console.log(e.target.value);
  }
}
