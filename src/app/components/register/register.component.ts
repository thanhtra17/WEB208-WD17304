import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup } from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[``],
      email:[``],
      password:[``]
    })
  }
signUp(){
this.http.post<any>("http://localhost:3000/signup-users", this.signupForm.value)
.subscribe(res =>{
  alert("dang ki tai khoan thanh cong");
  this.signupForm.reset();
  this.router.navigate([`login`]);
},err=>{
  alert("dang ki tai khoan that bai")
}
)}
}
