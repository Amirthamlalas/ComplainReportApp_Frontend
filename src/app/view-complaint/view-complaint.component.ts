import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent {

result:any=[]
  constructor(private api:ApiService){
let data:any={"userid":localStorage.getItem("userinfo")}
 

this.api.viewComplain(data).subscribe(
  (response:any)=>{
    this.result=response;
  }
)
      
  }

}
