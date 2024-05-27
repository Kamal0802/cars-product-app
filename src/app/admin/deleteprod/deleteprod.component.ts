import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-deleteprod',
  templateUrl: './deleteprod.component.html',
  styleUrls: ['./deleteprod.component.css']
})
export class DeleteprodComponent implements OnInit{

  product :any=[]

 constructor(private ps:ProductService){
 }

ngOnInit(): void {
  this.ps.getAllProducts().subscribe((data)=>{
    this.product=data
    console.log(this.product);
    
 })
}

deleteprod(id:string){

  this.ps.deleteProduct(id).subscribe((data)=>{
    console.log("data deleted successfully");
    alert("product deleted successfully")
    this.product=data
    
  })
   



}
}
