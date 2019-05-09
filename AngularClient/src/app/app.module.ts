import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { Serve1Service} from './serve1.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SalariesComponent } from './salaries/salaries.component';
import { EmpinsertComponent } from './empinsert/empinsert.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProjectsComponent,
    SalariesComponent,
    EmpinsertComponent,
    EmpdeleteComponent,
    EmpupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [Serve1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
