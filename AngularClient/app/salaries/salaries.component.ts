import { Component, OnInit } from '@angular/core';
import { Serve1Service } from './../serve1.service';
@Component({
  selector: 'app-salaries',
  template: `
    <p>
      Packages of employees are:
    </p>
    <!--<p>
      {{salaries|json}}
    </p>-->
    <table *ngIf="salaries" border="1">
    <tr>
      <th>Employee_id</th>
      <th>CTC</th>
      <th>Bonus</th>
      <th>Insurance</th>
    </tr>
    <tr *ngFor="let item of salaries">
      <td>{{item.empid}}</td>
      <td>{{item.CTC}}</td>
      <td>{{item.Bonus}}</td>
      <td>{{item.Insurance}}</td>
    </tr>
   </table>

  `,
  styles: []
})
export class SalariesComponent implements OnInit {
  public salaries=[];
  constructor(private service:Serve1Service) { }

  ngOnInit() {
    this.service.getallsalaries().subscribe(data=>{
      this.salaries=data;
      console.log(this.salaries);
    });
  }

}
