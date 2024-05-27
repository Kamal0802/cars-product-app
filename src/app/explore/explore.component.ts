import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit{

  constructor(private ps:ProductService){
    
  }

  product :any=[]

ngOnInit(): void {
  this.ps.getAllProducts().subscribe((data)=>{

     console.log(data);
     this.product=data
  
     
     
  })
}

}
