import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableDetailsComponent} from "./table-details/table-details.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: 'home',
    component: FormComponent
  },
  {
    path: 'details',
    component: TableDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
