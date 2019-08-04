import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;
  serviceErrors: any = {};
  data: any = {};
  apiURL = 'http://localhost:3001';
  // apiURL = 'https://tsnnodeapi.herokuapp.com';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

    invalidFirstName() {
      return (this.submitted && (this.serviceErrors.name != null && this.userForm.controls.name.errors != null));
    }

    invalidLastName() {
      return (this.submitted && (this.serviceErrors.gender != null || this.userForm.controls.gender.errors != null));
    }

    ngOnInit() {
      this.userForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(50)]],
        lastname: [''],
        gender: [''],
        email: [''],
        phone: [''],
        age: ['']
      });
    }

    onSubmit() {
      this.submitted = true;
      if (this.userForm.invalid === true) {
        return;
      } else {
        this.data = Object.assign({guid: this.guid}, this.userForm.value);
        console.log(this.data);
        this.http.post(this.apiURL + '/api/users', this.data).subscribe((data2: any) => {
          alert('ลงทะเบียนเรียบร้อยแล้ว');
          this.router.navigateByUrl('/');
        }, error => {
          this.serviceErrors = error.error.error;
          });
        this.registered = true;
      }
    }


}
