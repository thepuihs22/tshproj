export class UserInfoModel {
  guid: string;
  uid: string;
  // tslint:disable-next-line:variable-name
  first_name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  email: string;
  zipcode: string;

  constructor(obj: any = null) {
  if (obj != null) {
    Object.assign(this, obj);
    }
  }
}
