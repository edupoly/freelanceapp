import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent {
  constructor(public fb:FormBuilder){}
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
}
