import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signupData=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/usersignup",DataToSend)
  }

  viewProfile=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",DataToSend)
  }

  loginData=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",DataToSend)
  }

  complainData=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/complaint",DataToSend)
  }

  viewComplain=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewcomplaint",DataToSend)
  }

}
