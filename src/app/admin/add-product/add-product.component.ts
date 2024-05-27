import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm!:FormGroup
  singleprd:any|undefined
  
  id:string=this.route.snapshot.params['pid']

  editProd:any

  flag=0

  constructor(private fb:FormBuilder,private ps:ProductService,private http:HttpClient,private route:ActivatedRoute){
 
    this.productForm=this.fb.group({
      modelName:new FormControl(''),
      brandName:new FormControl(''),
      price:new FormControl(''),
      carType:new FormControl(''),
      image:new FormControl('')
    })


     this.ps.getProductById(this.id).subscribe((data)=>{
        this.editProd=data;
        console.log(data);
        this.productForm.patchValue(data)
        
     })

     if(this.id!= null){
     this. flag=1;
     }

  }



  editCar(){
    this.ps.editProduct(this.id,this.productForm.value).subscribe((data)=>{
      console.log("data edited");
      alert("product edited successfully");
      
    })
  }

  addCar(){
    
    this.ps.addproduct(this.productForm.value).subscribe((data)=>{
      console.log(data);
      this.productForm.reset()
      alert("car added successfully")
      
    });
    
    
  }

  getById(){
    this.ps.getProductById("65f67429156ea5c59e9c8b87").subscribe(data =>{
      this.singleprd=data
    })
    console.log(this.singleprd);
    
   }
  
}
