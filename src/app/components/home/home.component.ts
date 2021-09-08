import { Component, OnInit } from '@angular/core';
// import * as faker from 'faker'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // faker = faker;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
