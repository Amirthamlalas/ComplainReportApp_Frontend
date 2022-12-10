import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
constructor(private api:ApiService){}
        name=""
        phoneno= ""
        address= ""
        email= ""
        username= ""
        password= ""
readValue=()=>{
  let data:any={
    "name": this.name,
    "phoneno": this.phoneno,
    "address": this.address,
    "email": this.email,
    "username": this.username,
    "password": this.password
  }
  console.log(data)
  this.api.signupData(data).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("User added Successfully")
        
      } else {
        alert("Something went wrong")
      }
    }
  )
}
}
