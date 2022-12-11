import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {

  complaints=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"userid":localStorage.getItem("userinfo"),"complaints":this.complaints}

    console.log(data)

    this.api.complainData(data).subscribe(
      (response:any)=>{

        if (response.status=="success") {
          alert("complaint made")
          
        } else {
          alert("something went wrong")
        }

      }
    )

  }

}
