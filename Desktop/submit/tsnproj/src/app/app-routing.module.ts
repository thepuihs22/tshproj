import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';


const routes: Routes = [
  {
    path: '',
    component: InputFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
