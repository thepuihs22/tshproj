import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  private subscriber: any;
  contacts: any[] = [];
  users: any[] = [];
  filter: any;
  p: any;
  allUser: any;
  comeUser: any;
  apiURL = 'http://puihs22.local:3001';
  // apiURL = 'http://localhost:3001';
  // apiURL = 'https://tsnnodeapi.herokuapp.com';
  key = 'name';
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
// apiURL = 'https://tsnnodeapi.herokuapp.com';
  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
      this.http.get(this.apiURL + '/api/users').subscribe((data: any) => {
        this.contacts = data.data;
        this.users = this.contacts;
        this.allUser = this.users.length;
        this.comeUser = this.users.filter(it => it.isActive === true).length;
      });
    });
  }

  gotoAdd() {
    this.router.navigateByUrl('/');
  }
}
