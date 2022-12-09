import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

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
}
}
