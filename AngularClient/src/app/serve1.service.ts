import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IEmployee,Employee } from './../app/employee';
import { IProject } from './../app/project';
import { ISalary } from './salary';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public allempurl:string="http://10.9.44.212:8080/employees";
  public allprojurl:string="http://10.9.44.212:8080/projects";
  public allsalary:string="http://10.9.44.212:8080/salaries";
  public empentry:string="http://10.9.44.212:8080/employee/enter";
  public projentry:string="http://10.9.44.212:8080/project/enter";
  public salentry:string="http://10.9.44.212:8080/salary/enter";
  public empupdate:string="http://10.9.44.212:8080/employee";
  public empdelete:string="http://10.9.44.212:8080/employee"
  //public headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
  getallemployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.allempurl).pipe(tap(data=>(JSON.stringify(data))), catchError(this.errorHandler));
  }
  getallprojects():Observable<IProject[]>{
    return this.http.get<IProject[]>(this.allprojurl).pipe(tap(data=>(JSON.stringify(data))), catchError(this.errorHandler));
  }
  getallsalaries():Observable<ISalary[]>{
    return this.http.get<ISalary[]>(this.allsalary).pipe(tap(data=>(JSON.stringify(data))), catchError(this.errorHandler));
  }
  insertemployees(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.empentry,emp).pipe(tap(data=>(JSON.stringify(data))),catchError(this.errorHandler));
  }
  insertprojects(proj:IProject[]):Observable<IProject[]>{
    return this.http.post<IProject[]>(this.projentry,proj).pipe(tap(data=>(JSON.stringify(data))),catchError(this.errorHandler));
  }
  insertsalaries(sal:ISalary[]):Observable<ISalary[]>{
    return this.http.post<ISalary[]>(this.salentry,sal).pipe(tap(data=>(JSON.stringify(data))),catchError(this.errorHandler));
  }
  updateemployees(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.empupdate+"/"+emp.id,emp);
  }
  deleteemployees(emp:Employee):Observable<Employee>{
    return this.http.delete<Employee>(this.empdelete+"/"+emp.id);
  }
  errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message||"Server Error");
  }

}
