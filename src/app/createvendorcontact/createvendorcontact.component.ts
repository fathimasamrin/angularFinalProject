import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorcontactService } from '../vendorcontact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createvendorcontact',
  templateUrl: './createvendorcontact.component.html',
  styleUrls: ['./createvendorcontact.component.scss']
})
export class CreatevendorcontactComponent implements OnInit {

  vendor: Vendorcontact = new Vendorcontact() ;

  addVendorForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,private vendorService: VendorcontactService,
    private router: Router,private route: ActivatedRoute,private toastr: ToastrService,private loginService:LoginService) {

   
  }

  vendors: Observable<Vendorcontact[]>;

 

  createForm() {
    this.addVendorForm = this.fb.group({
      vName: ['', Validators.required ],
      vAddress: ['', Validators.required ],
      vLocation: ['', Validators.required ],
      vService: ['', Validators.required ],
      pincode: ['', Validators.required ],
      cName:['',Validators.required],
      cDept :['',Validators.required],
      cEmail:['',Validators.required,Validators.email],
      cPhone:['',Validators.required]
});
  }

  ngOnInit(): void {

    this.createForm();
    
  }

  save() {
    this.vendorService.createVendor(this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
      this.toastr.success(' successfully created!','creation status');
      this.vendorService.getVendors();
      this.gotoList();

  }


 
   
  
  onSubmit() {
    this.submitted = true;
    this.vendor = new Vendorcontact();

    this.vendor.vName=this.addVendorForm.controls.vName.value;
    this.vendor.vAddress=this.addVendorForm.controls.vAddress.value;
    this.vendor.vLocation=this.addVendorForm.controls.vLocation.value;
    this.vendor.vService=this.addVendorForm.controls.vService.value;
    this.vendor.pincode=this.addVendorForm.controls.pincode.value;
    this.vendor.cName=this.addVendorForm.controls.cName.value;
    this.vendor.cDept=this.addVendorForm.controls.cDept.value;
    this.vendor.cEmail=this.addVendorForm.controls.cEmail.value;
    this.vendor.cPhone=this.addVendorForm.controls.cPhone.value;

    this.vendorService.duplicate(this.vendor.cPhone,this.vendor.cEmail).subscribe(

      data=>{
        if(data!=null){
          this.toastr.error('Duplicate Entry for email or phone','Duplication');
          this.router.navigate(['/home/vendorcontact']);
        }
      },error =>this.save());
   

  }

  gotoList() {
    this.vendors = this.vendorService.getVendors();
    this.vendorService.getVendors();
    this.router.navigate(['/home/vendorcontact']);
  }

}
