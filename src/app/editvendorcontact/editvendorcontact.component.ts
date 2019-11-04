import { Component, OnInit } from '@angular/core';
import { Vendorcontact } from '../vendorcontact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorcontactService } from '../vendorcontact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editvendorcontact',
  templateUrl: './editvendorcontact.component.html',
  styleUrls: ['./editvendorcontact.component.scss']
})
export class EditvendorcontactComponent implements OnInit {

  vendor: Vendorcontact = new Vendorcontact() ;

  editVendorForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,private vendorService: VendorcontactService,
    private router: Router,private route: ActivatedRoute,private toastr: ToastrService,private loginService:LoginService) {

   
  }
  vId:number;
  vendors: Observable<Vendorcontact[]>;

  createForm() {
    this.editVendorForm = this.fb.group({
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
    

    this.vId=this.route.snapshot.params['vId'];
    this.vendorService.getVendor(this.vId)
    .subscribe(data=>{
      console.log("init"+data)
      this.vendor=data;
    },error=>console.log(error));

  }

  

 
 
   
  
  onSubmit() {
    this.updateVendor();

  }

  updateVendor()
  {
    {
    
      console.log("update"+this.vId+this.vendor);
      this.vendorService.updateVendor(this.vId,this.vendor)
      .subscribe(data=>console.log(data),error=>console.log(error));
      this.vendor=new Vendorcontact();
      this.toastr.success(' successfully updated!','toastrupdate');
      this.vendorService.getVendors();
      this.gotoList();
    }
  }

  gotoList() {
    this.vendors = this.vendorService.getVendors();
    this.vendorService.getVendors();
    this.router.navigate(['/home/vendorcontact']);
  }

}
