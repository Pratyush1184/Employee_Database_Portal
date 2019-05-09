import { Component, OnInit } from '@angular/core';
import { Serve1Service } from './../serve1.service';
@Component({
  selector: 'app-employees',
  template: `
    <p>
      Employees working here are:
    </p>
    <!--<p>
      {{employees|json}}
    </p>-->
    <table *ngIf="employees" border="1">
    <tr>
      <th>Employee_id</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
    <tr *ngFor="let item of employees">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.role}}</td>
    </tr>
   </table>

  `,
  styles: []
})
export class EmployeesComponent implements OnInit {
  public employees=[];
  constructor(private service:Serve1Service) { }

  ngOnInit() {
    this.service.getallemployees().subscribe(data=>{
      this.employees=data;
      console.log(this.employees);
    });
  }

}
