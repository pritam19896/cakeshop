import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cakeshop';
  ngOnInit() {
    localStorage.setItem('isLogin', 'no');
    localStorage.setItem('username', '');
    localStorage.setItem('email', '');
    localStorage.setItem('mobile', '');
    localStorage.setItem('DOB', '');
  }
}
