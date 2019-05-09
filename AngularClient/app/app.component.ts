import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { Event } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public activate;
  public flag;
  public disroutes=["/employees","/projects","/employees","","/"];
  public insroutes=["/empinsert"];
  public updroutes=["/empupd"];
  public delroutes=["/empdel"];
  constructor(private router:Router,private aroute:ActivatedRoute){
    this.activate=0;
    this.flag=0;
    router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationStart){
        for(var i=0;i<this.disroutes.length;i++)
        {
          if(event.url==this.disroutes[i])
          {
            this.activate=0;
          }
        }
        for(var i=0;i<this.insroutes.length;i++)
        {
          if(event.url==this.insroutes[i])
          {
            this.activate=3;
          }
        }
        for(var i=0;i<this.delroutes.length;i++)
        {
          if(event.url==this.delroutes[i])
          {
            this.activate=1;
          }
        }
        for(var i=0;i<this.updroutes.length;i++)
        {
          if(event.url==this.updroutes[i])
          {
            this.activate=2;
          }
        }
       }
    });
  }
  // routecheck(){
  //   console.log(this.aroute.snapshot._routerState);
  //   console.log(this.aroute.snapshot._routerState['url'].toString());
  //   if((this.aroute.snapshot._routerState['url'] in this.disroutes) || (this.router.url in this.disroutes)){
  //     this.activate=0;
  //     return true;
  //   }
  //   else if(this.aroute.snapshot._routerState['url'] in this.insroutes){
  //     this.activate=3;
  //     return true;
  //   }
  //   else if(this.aroute.snapshot._routerState['url'] in this.updroutes){
  //     this.activate=2;
  //     return true;
  //   }
  //   else if(this.aroute.snapshot._routerState['url'] in this.delroutes){
  //     this.activate=1;
  //     return true;
  //   }
  //   else{
  //     if(this.aroute.snapshot._routerState['url']==this.disroutes[0])
  //    console.log("LOOOLLLLL");
  //    console.log("OKKKKK");
  //    console.log(this.aroute.url);
  //     return false;
  //   }
  // }
  emplist(){
    this.flag=1;
  }
  check(){
    return this.flag==0?true:false;
  }

}
