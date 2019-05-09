import { Component, OnInit } from '@angular/core';
import { Serve1Service } from './../serve1.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-projects',
  template: `
    <p>
      Current projects in the company are:
    </p>
   <!--<p>
      {{projects|json}}
    </p>-->
    <table *ngIf="projects" border="1">
     <tr>
       <th>Project_Id</th>
       <th>Name</th>
       <th>Domain</th>
     </tr>
     <tr *ngFor="let item of projects">
       <td>{{item.project_id}}</td>
       <td>{{item.name}}</td>
       <td>{{item.domain}}</td>
     </tr>
    </table>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  public projects=[];
  constructor(private service:Serve1Service) { }

  ngOnInit() {
    this.service.getallprojects().subscribe(data=>{
      this.projects=data;
    });
  }
}