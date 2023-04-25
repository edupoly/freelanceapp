import { Component } from '@angular/core';
import { FreelancerService } from 'src/app/core/freelancer.service';

@Component({
  selector: 'app-freelancelist',
  templateUrl: './freelancelist.component.html',
  styleUrls: ['./freelancelist.component.css']
})
export class FreelancelistComponent {
  constructor(public fS:FreelancerService){}
  freelancers:any=[]
  ngOnInit(){
    this.fS.getFreelancers().subscribe((res)=>{
      console.log(res)
      this.freelancers=res;
    })
  }
}
