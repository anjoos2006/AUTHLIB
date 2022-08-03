import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }
}
