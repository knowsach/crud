import { Injectable } from '@angular/core';
import { user } from '../app/form/userData.model';

@Injectable()
export class EmpService {

  table: user[];
  checking : number =0;

  constructor() {
    this.table = new Array<user>();
  }

  public addData(u1: user ) {
    u1.id = this.checking;
    this.table.push(u1);
    this.checking++;
  }

  public getData() {
    return this.table;
  }
}
