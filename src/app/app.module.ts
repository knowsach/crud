import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './form/table/table.component';
import { FormsModule} from '@angular/forms';
import { EmpService } from './emp.service';
import {ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
