import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }
  registerFreelancer(freelancer:any){
    return this.http.post("http://localhost:3000/freelancers",freelancer)
  }
}
