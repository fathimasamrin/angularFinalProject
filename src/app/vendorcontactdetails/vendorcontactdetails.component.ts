import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { VendorcontactService } from '../vendorcontact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-vendorcontactdetails',
  templateUrl: './vendorcontactdetails.component.html',
  styleUrls: ['./vendorcontactdetails.component.scss']
})
export class VendorcontactdetailsComponent implements OnInit {

  vId: number;
  vendor: Vendorcontact;
  constructor(private route: ActivatedRoute,private router: Router,
    private vendorService: VendorcontactService,private loginService:LoginService) { }

  ngOnInit() {
    
    this.vendor = new Vendorcontact();

    this.vId = this.route.snapshot.params['vId'];
  
    

    this.vendorService.getVendor(this.vId)
    .subscribe(data => {
      console.log(this.vId)
      console.log(data)
      this.vendor = data;
     }, error => console.log(error));
     
  }

  list(){
    this.router.navigate(['/vendorcontact']);
  }

}
