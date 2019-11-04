import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VendorcontactService } from './vendorcontact.service';
import { VendorContactListComponent } from './vendor-contact-list/vendor-contact-list.component';
import { CreatevendorcontactComponent } from './createvendorcontact/createvendorcontact.component';
import { EditvendorcontactComponent } from './editvendorcontact/editvendorcontact.component';
import { VendorcontactdetailsComponent } from './vendorcontactdetails/vendorcontactdetails.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {path:'home',component: HomeComponent,
  children: [
  {path:'vendorcontact',component:VendorContactListComponent},
  { path: 'vendorbyid/:vId', component: VendorcontactdetailsComponent },
  { path: 'insertvendor', component: CreatevendorcontactComponent },
  { path: 'updatevendor/:vId', component: EditvendorcontactComponent }

  ],canActivate:[LoginGuard]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
