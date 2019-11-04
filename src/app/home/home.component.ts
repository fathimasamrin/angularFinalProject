import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  public logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }

  public home(){
    this.router.navigateByUrl('/home/vendorcontact');
  }

}
