import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
registered = false;
submitted = false;
userForm: FormGroup;
guid: string;
serviceErrors: any = {};
data: any = {};
gender2: string[] = ['กระทรวงพาณิชย์', 'กระทรวงอุตสาหรรม'​, 'กระทรวงวัฒนธรรม', 'กระทรวงการศึกษา'];
// apiURL = 'http://localhost:3001';
apiURL = 'http://puihs22.local:3001';
// apiURL = 'https://tsnnodeapi.herokuapp.com';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    // this.http.get(this.apiURL + '/api/contacts').subscribe((data: any) => {
    //   console.log(data);
    //   // this.options = data.data;
    //   // data.data.forEach(element => {
    //   //     this.options.push(element.name);
    //   // });

    //   // this.guid = data.guid;
    // }, error => {
    //   console.log('There was an error generating the proper GUID on the server", error');
    // });
  }

  invalidFirstName() {
  return (this.submitted && (this.serviceErrors.name != null && this.userForm.controls.name.errors != null));
  }

  invalidLastName() {
    return (this.submitted && (this.serviceErrors.gender != null || this.userForm.controls.gender.errors != null));
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      gender: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
      this.data = Object.assign({guid: this.guid}, this.userForm.value);
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
