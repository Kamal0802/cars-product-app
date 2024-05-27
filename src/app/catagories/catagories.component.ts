import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit{

  product : any=[]
  
  filter!: FormGroup;

  searchtxt:string=''

 

  constructor(private ps:ProductService,private fb:FormBuilder){}

  ngOnInit(): void {

      this.filter=new FormGroup({
        catagory:new FormControl()
      })


    this.ps.getAllProducts().subscribe((data)=>{
         this.product=data
         console.log();
    


        
         
         
    })
  }



getvalue(){
 
 this.searchtxt=this.filter.value.catagory
 this.filter.reset()
 console.log(this.searchtxt);
 
  

}


}
