import { Injectable } from '@nestjs/common';

import {  User } from '@shield/data'


@Injectable()
export class AppService {
  user: User[] = [{firstName: 'Edita', lastName: 'Gudan', email: 'edi@edi.com'}, {firstName: 'Bart', lastName: 'Simpson', email: 'bart@simpson.com'}];

  getData(): User[]{
    return this.user;
  }

  addUser(firstName: string, lastName: string, email: string) {
    this.user.push({firstName: firstName, lastName: lastName, email: email})
  }
}
