import { Component, OnInit ,Input} from '@angular/core';
import { EmpService } from 'src/app/emp.service';
import {user} from '../userData.model';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

user : user[];

  constructor(private emp:EmpService) {    
   }

   @Input() hide;

  ngOnInit() {
    this.user = new Array<user>();
    this.user = this.emp.getData();
  }
}