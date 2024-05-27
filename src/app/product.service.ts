import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:3000/api/product")
  }

  addproduct(data: any){
   return this.http.post("http://localhost:3000/api/product",data)
    console.log(data);
    
    console.log("data added");
    
  }

  getProductById(id:string){
    return this.http.get("http://localhost:3000/api/product/"+id)
  }

  deleteProduct(id:string){
    return this.http.delete("http://localhost:3000/api/product/"+id)
  }

  editProduct(id:string,data:any){
    return this.http.put("http://localhost:3000/api/product/"+id,data)
  }
}
