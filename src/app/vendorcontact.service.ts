import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendorcontact } from './vendorcontact';

@Injectable({
  providedIn: 'root'
})
export class VendorcontactService {

  baseUrl='http://localhost:9090/FinalProjectRestAPI/api';

  constructor(private http:HttpClient) { }

  getVendor(vId: number): Observable<any> {
    
    return this.http.get(this.baseUrl+'/vendorbyid/'+vId);
  }
  getVendors() {
    return this.http.get<Vendorcontact[]>(this.baseUrl+'/vendorcontactdetails');
   }

   search(searchString:String):Observable<Vendorcontact[]>
  {
    return this.http.get<Vendorcontact[]>(this.baseUrl+'/vendordetails/'+searchString);
  }

   createVendor(vendor: Vendorcontact): Observable<Object> {
    //return this.http.post('${this.baseUrl}', employee);
    console.log(vendor);
    return this.http.post(this.baseUrl+'/insertvendordetails', vendor);
   }

      updateVendor(vId: number, vendor: Vendorcontact): Observable<any> {
      //return this.http.put('${this.baseUrl}/${id}', value);
      return this.http.put(this.baseUrl+'/updatevendorbyid/'+vId, vendor);
    }

    
  deleteVendor(vId: number,  vendor: Vendorcontact): Observable<any> {
    //return this.http.delete('${this.baseUrl}/${id}', { responseType: 'text' });
    return this.http.put(this.baseUrl+'/disablevendor/'+vId, vendor);
  }

  duplicate(cPhone:number,cEmail:String):any{
    return this.http.get<Vendorcontact[]>(this.baseUrl+'/duplication/'+cPhone+'/'+cEmail)

  }

  
}
