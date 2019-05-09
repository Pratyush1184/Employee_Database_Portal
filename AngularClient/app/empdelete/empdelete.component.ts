import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { Serve1Service } from './../serve1.service';
@Component({
  selector: 'app-empdelete',
  template: `
  <div class="container-fluid">
  <h1>Delete Employee by id:</h1>
  <!--{{userForm.value|json}}-->
  <br>
  <!--{{userModel|json}}-->
  <p [innerHtml]="message"></p>
  <form #userForm="ngForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label>Employee ID:</label>
      <input required type="text" class="form-control" [(ngModel)]="userModel.id" name="id">
    </div>
    <button [disabled]="userForm.form.invalid" class="btn btn-primary" type="submit">Submit form</button>
  </form>
</div>

  `,
  styles: []
})
export class EmpdeleteComponent implements OnInit {

  public userModel=new Employee(101,"Prabhav","developer");
  public message="";
  constructor(private service:Serve1Service) { };

  ngOnInit() {
  }
  onSubmit(){
    this.service.deleteemployees(this.userModel).subscribe(data=>{
      console.log(data+" entry has been deleted");
      if(data.toString()=='0')
      {
        this.message="Can't delete as the employee doesn't exist";
      }
      else
      {
        this.message="Deleted successfully";
      }
     });
  }


}
