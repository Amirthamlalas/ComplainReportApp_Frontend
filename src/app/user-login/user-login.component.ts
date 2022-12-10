import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username=""
  password=""
  constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data:any={
      "username":this.username,"password":this.password
    }
    console.log(data)
    this.api.loginData(data).subscribe(
      (response:any)=>{
        let userid=response.userid
        console.log(userid)
        localStorage.setItem("userinfo",userid)
        this.route.navigate(['/profile'])
        
      }

    )

  }
}
