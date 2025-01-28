import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancelistComponent } from './freelancer/freelancelist/freelancelist.component';
import { RegformComponent } from './registration/regform/regform.component';

const routes: Routes = [
  {
    path:"registration",
    component:RegformComponent
  },
  {
    path:'freelancers',
    component:FreelancelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
