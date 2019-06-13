import { Injectable } from '@angular/core';
import { user } from '../app/form/userData.model';


@Injectable()
export class EmpService {

  table: user[];

  constructor() {
    this.table = new Array<user>();
  }

  public addData(u1: user) {
    this.table.push(u1);
  }

  public getData() {
    return this.table;
  }
}
