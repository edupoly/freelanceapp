import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/core/registration.service';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent {
  constructor(public fb:FormBuilder,public regSer:RegistrationService){}
  newtech:string='';
  regForm:FormGroup = this.fb.group({
    fullname:[''],
    gender:[''],
    img:[''],
    hourCost:[''],
    technologies:this.fb.array([
      
    ])
  })
  get technologies(){
    return this.regForm.get('technologies') as FormArray
  }
  addTechnology(x:any){
    console.log(x)
    this.technologies.push(this.fb.control(x.value))
    x.value=''
    console.log(this.technologies.value)
  }
  removeTechnology(i:number){
    this.technologies.removeAt(i)
  }
  add(){
    this.regSer.addFreelancer(this.regForm.value).subscribe((res)=>{console.log(res)})
  } 
}
