import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }

  addFreelancer(freelancer:any){
    console.log(freelancer)
    return this.http.post("http://localhost:3000/freelancers",freelancer)
  }
}
