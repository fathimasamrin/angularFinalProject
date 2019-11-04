import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:LoginService,private router:Router,private formbuilder:FormBuilder)
   { }
  
  loginForm:FormGroup;
  isSubmitted=false;
  loginuser:Login
  ngOnInit()
   {
      this.loginForm=this.formbuilder.group({
        username: ['', Validators.compose([Validators.required])],
        password:['',Validators.required]
      });
    }

    get formControls()
    {
      return this.loginForm.controls;
    }

    login()
    { 
     
      console.log(this.loginForm.value);
    
      this.isSubmitted  =true;
      if(this.loginForm.invalid)
      {
       alert('User form is not valid!!')
        return;
      }
      
       
      
       
    else
      {
       
       
        this.authservice.login(this.loginForm.value).subscribe(
          data =>
          {
            this.loginuser = data;
            console.log(data);
            console.log(data.username);
            console.log(data.roleId);

            if(data.roleId!=null && data.roleId=='1')
            {
              this.isSubmitted=true;
               this.router.navigateByUrl('/home/vendorcontact');
            }
            else
            {
              window.alert("No user found!Please Register");
            }
          }
        );
       

       
       }
       
      
    }
  


}