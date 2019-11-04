import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { Observable } from 'rxjs';
import { VendorcontactService } from '../vendorcontact.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-contact-list',
  templateUrl: './vendor-contact-list.component.html',
  styleUrls: ['./vendor-contact-list.component.scss']
})
export class VendorContactListComponent implements OnInit {

  vendors: Observable<Vendorcontact[]>


  constructor(private vendorService: VendorcontactService,
    private router: Router, private toastr: ToastrService, private authservice: LoginService) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    console.log("reloadata");
    this.vendors = this.vendorService.getVendors();
    console.log(this.vendors);
  }

  deleteVendor(vId: number, vendor: Vendorcontact) {
    if (confirm("Are you sure?")) {
      this.vendorService.deleteVendor(vId, vendor)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();

          },
          error => {
            console.log(error);
          });
      this.toastr.success(' successfully deleted!', 'deletion status');

    }
    else {
      this.toastr.success(' Vendor not deleted!', 'deletion status');

    }
  }

  vendorDetails(vId: number) {
    console.log(vId);
    this.router.navigate(['/home/vendorbyid', vId]);
  }

  searchString: String;
  search(searchString) {
    console.log(searchString);
    if (searchString != null) {
      this.vendors = this.vendorService.search(this.searchString);


    } else {
      console.log("Else :" + searchString);
      this.reloadData();
    }
  }


}
