import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent implements OnInit {
  public myAngularxQrCode: string = null
  constructor() {
    this.myAngularxQrCode = ' http://127.0.0.1:4040';
    // window.location.href = this.myAngularxQrCode;
    // this.router.navigateByUrl('/create');
   }

  ngOnInit() {
  }

}
