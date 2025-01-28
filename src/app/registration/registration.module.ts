import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegformComponent } from './regform/regform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RegformComponent]
})
export class RegistrationModule { }
