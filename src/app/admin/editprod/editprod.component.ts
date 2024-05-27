import { Component } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent {

  product :any=[]

 constructor(private ps:ProductService){
 }

ngOnInit(): void {
  this.ps.getAllProducts().subscribe((data)=>{
    this.product=data
    console.log(this.product);
    
 })
}


}
