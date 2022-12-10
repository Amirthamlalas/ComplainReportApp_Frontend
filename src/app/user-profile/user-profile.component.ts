import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
userid:any=""
profile:any=[]

  constructor(private api:ApiService){

    this.userid=localStorage.getItem("userinfo")
    let data:any={
        "id":this.userid
    }
    this.api.viewProfile(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.profile=response;
      }
    )
  }
}
