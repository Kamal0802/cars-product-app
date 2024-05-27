import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent implements OnInit {

  prod:any

constructor(private route:ActivatedRoute,private ps:ProductService){

}

id:string=this.route.snapshot.params['id']

ngOnInit(): void {
  this.ps.getProductById(this.id).subscribe((data)=>{
    this.prod=data
    console.log(this.prod);
    
  })
}
}
