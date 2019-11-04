import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  baseurl='http://localhost:9090/FinalProjectRestAPI/api';
  

  constructor(private httpService:HttpClient) { }

  public login(userInfo:Login)
  {
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    localStorage.setItem('UserID',userInfo.username);
    return this.httpService.get<Login>(this.baseurl+'/userdetails/'+userInfo.username)
  }

  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public reservation()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }

 
}
