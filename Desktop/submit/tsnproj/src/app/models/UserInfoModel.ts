export class UserInfoModel {
  guid: string;
  uid: string;
  // tslint:disable-next-line:variable-name
  name: string;
  lastname: string;
  // tslint:disable-next-line:variable-name
  gender: string;
  email: string;
  phone: string;
  age: string

  constructor(obj: any = null) {
  if (obj != null) {
    Object.assign(this, obj);
    }
  }
}
