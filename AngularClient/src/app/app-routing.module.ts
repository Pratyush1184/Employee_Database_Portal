import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { SalariesComponent } from './salaries/salaries.component';
import { EmpinsertComponent } from './empinsert/empinsert.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';

const routes:Routes=[
  { path:'employees',component:EmployeesComponent},//Manually entering this path gives undesired behaviour
  { path:'projects',component:ProjectsComponent},
  { path:'salaries',component:SalariesComponent},
  { path:'empinsert',component:EmpinsertComponent},
  { path:'empupd',component:EmpupdateComponent},
  { path:'empdel',component:EmpdeleteComponent}
  //{ path:'employees/del',component:EmployeesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
