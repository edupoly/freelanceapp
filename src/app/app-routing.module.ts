import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './registration/regform/regform.component';

const routes: Routes = [
  {
    path:"registration",
    component:RegformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
