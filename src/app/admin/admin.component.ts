import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // admin : Admin ={
  //   "id":1,
  //   "name":"Wahyu",
  //   "email": "Wahyu@gmail.com",
  //   "mobile":081274374658
  // }

  constructor() { }

  ngOnInit() {
  }

}
