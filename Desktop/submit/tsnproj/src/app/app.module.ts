import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
  declarations: [
    AppComponent,
    InputFormComponent,
    DisplayUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
