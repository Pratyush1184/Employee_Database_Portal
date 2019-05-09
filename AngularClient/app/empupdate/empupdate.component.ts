import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { Serve1Service } from './../serve1.service';
@Component({
  selector: 'app-empupdate',
  template: `
  <div class="container-fluid">
  <h1>Enter Employee Update Details:</h1>
  <!--{{userForm.value|json}}-->
  <br>
  <!--{{userModel|json}}-->
  <p [innerHtml]="message">
  <form #userForm="ngForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label>Employee ID:</label>
      <input required type="text" class="form-control" [(ngModel)]="userModel.id" name="id">
    </div>

    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" [(ngModel)]="userModel.name" name="name">
    </div>

    <div class="form-group">
      <label>Role:</label>
      <select class="custom-select" [(ngModel)]="userModel.role" name="role">
        <option selected>Select role....</option>
        <option *ngFor="let role of roles">{{role}}</option>
      </select>
    </div>
    <button [disabled]="userForm.form.invalid" class="btn btn-primary" type="submit">Submit form</button>
  </form>
</div>
  `,
  styles: []
})
export class EmpupdateComponent implements OnInit {
  public roles=[
    "developer","tester"
  ];
  public userModel=new Employee(101,"Prabhav","developer");
  public message="";
  constructor(private service:Serve1Service) { };

  ngOnInit() {
  }
  onSubmit(){
    console.log("Entry made");
    this.service.updateemployees(this.userModel).subscribe(data=>{
        if(data.toString()=="Please make valid updates."){
          this.message=data.toString();
        }
        else{
          this.message="Update made successfully.";
        }
     });
  }
}
