import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-complaint',
  templateUrl: './view-all-complaint.component.html',
  styleUrls: ['./view-all-complaint.component.css']
})
export class ViewAllComplaintComponent {
data:any=[]

constructor(private api:ApiService){
  this.api.viewallComplain().subscribe(
    (response:any)=>{
      this.data=response;
    }
  )
}
}
