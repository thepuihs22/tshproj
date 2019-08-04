import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { AllUserComponent } from './all-user/all-user.component';
import { RegisterComponent } from './register/register.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';

const routes: Routes = [
  {
    path: '',
    component: ScanQrComponent
  },
  {
    path: 'create',
    component: InputFormComponent
  },
  {
    path: 'alluser',
    component: AllUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'scan-qr',
    component: ScanQrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
