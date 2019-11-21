import { Component } from '@angular/core';

export class task{
  message:string;
  done:boolean;

}

@Component({
    selector: 'app-root',
    
    templateUrl: "app.html",
    styleUrls:["app.component.css"] 
})

export class AppComponent {
   
    public tasks=TASKS;
    public newMessage="";
    getStyle(isDone:boolean){
      return{
        "btn-primary":!isDone,
        "btn-secondary":isDone
      }
    }
    add(){
      this.tasks.push({message:this.newMessage,done:false})
      this.newMessage="";
    }
    remove(index:number){
      this.tasks.splice(index, 1)
     
    }
    toggleDone(index:number){
      this.tasks[index].done=!this.tasks[index].done
    }
}

// Define card data.
var TASKS:task[]=[
  {message:"sample task1",done:false},
  {message:"sample task2",done:true}
]


