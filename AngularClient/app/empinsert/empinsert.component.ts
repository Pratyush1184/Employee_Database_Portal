import { Component, OnInit } from '@angular/core';
import { Serve1Service } from './../serve1.service';
import { Employee } from './../employee';
@Component({
  selector: 'app-empinsert',
  templateUrl: './empinsert.component.html',
  styles: []
})
export class EmpinsertComponent implements OnInit {
  public roles=[
    "developer","tester"
  ];
  public errormessage="";
  public userModel=new Employee(105,"Prabhav","developer");
  constructor(private service:Serve1Service) { };

  ngOnInit() {
  }
  onSubmit(){
    this.service.insertemployees(this.userModel).subscribe(data=>{
      console.log(data);
      if(data.toString()=="Please enter valid data")
      {
        this.errormessage=data.toString();
      }
      else
      this.errormessage="Entry successful";
    });
  }

}
