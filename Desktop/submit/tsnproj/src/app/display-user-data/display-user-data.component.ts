import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../models/UserInfoModel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {
  // user: UserInfoModel = new UserInfoModel();
  myControl = new FormControl();
  options: string[];
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  // apiURL = 'http://localhost:3001';
  apiURL = 'http://puihs22.local:3001';
  // apiURL = 'https://tsnnodeapi.herokuapp.com';
  contact = [];
  contact2 = [];
  private subscriber: any;
  states: any[] = [];

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
      this.http.get(this.apiURL + '/api/users').subscribe((data: any) => {
        this.contact = data.data;
        this.states = this.contact.filter(it => it.isActive === false);
      });
    });
  }

  getData() {
    const q = this.states.find(it => it.name === this.stateCtrl.value);
    if (this.states.find(it => it.name === this.stateCtrl.value) === undefined) {
      alert('ไม่พบรายชื่อ');
      return;
    }
    this.http.put(this.apiURL + '/api/users/' + q._id, {
      name: q.name,
      email: q.email,
      gender: q.gender,
      phone: q.phone,
      isActive: true
    }).subscribe(d => {
      this.http.get(this.apiURL + '/api/users').subscribe((data: any) => {
        this.contact = data.data;
        this.states = this.contact.filter(it => it.isActive === false);
        alert('ลงทะเบียนเรียบร้อย');
        window.location.reload();
        // this.user = new UserInfoModel(data.customer);
      });
    }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => this._filter(state))
      );
    }
    filterStates(name: string) {
      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
    }

  gotoCreate() {
    this.router.navigateByUrl('/create');
  }

  gotoAllpage() {
    this.router.navigateByUrl('/alluser');
  }

  changed(txtSearch) {
    console.log(txtSearch);
  }
}
