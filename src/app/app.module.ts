import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VendorContactListComponent } from './vendor-contact-list/vendor-contact-list.component';
import{ ToastrModule,ToastrService} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditvendorcontactComponent } from './editvendorcontact/editvendorcontact.component';
import { CreatevendorcontactComponent } from './createvendorcontact/createvendorcontact.component';
import { VendorcontactdetailsComponent } from './vendorcontactdetails/vendorcontactdetails.component';
import{ NgxPaginationModule } from'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VendorContactListComponent,
    EditvendorcontactComponent,
    CreatevendorcontactComponent,
    VendorcontactdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
