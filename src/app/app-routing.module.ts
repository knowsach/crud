import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './form/table/table.component';
import { FormComponent} from './form/form.component';

const routes: Routes = [{path:'' , component:FormComponent},
                        {path:'empTable', component:TableComponent},
                        {path:'empForm/:id' , component:FormComponent},
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
