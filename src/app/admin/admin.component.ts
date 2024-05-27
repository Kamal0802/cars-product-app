import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  
  loginForm!:FormGroup

 
  constructor(private fb:FormBuilder,private route:Router){
       this.loginForm=this.fb.group({
        username:new FormControl('',[Validators.required,Validators.minLength(5)]),
        password:new FormControl('',[Validators.required])
       })
  }

  login(){
    console.log(this.loginForm.value);
    
    if(this.loginForm.value.username == "kamal" && this.loginForm.value.password=="kamal2002"){
         this.route.navigateByUrl('dashboard')
    }
    
  }

  
}





