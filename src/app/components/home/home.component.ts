import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos!: Todo[];
 inputTodo:string = "";
 @Output() inputTodoEvent = new EventEmitter<string>();

completed : Todo[]= [];

  constructor( private route :Router, private DataService:DataService) { }

  ngOnInit(): void {



  this.todos =[
  {
    content: 'first to do',
    completed: false
  },
  {
    content: 'second to do',
    completed: false
  }
  ]

  }
toggleDone (id: number){
  this.todos.map((v,i) =>{
    if (i== id) v.completed =! v.completed;
    return v;
  })
}
deleteTodo (id:number){
  this.todos=this.todos.filter((v,i)=> i !== id );
}
addTodo (){

  this.todos.push({

    content : this.inputTodo,
    completed: false
  });
  this.inputTodo='';

}


 checktodo (todo: Todo){
  this.completed.push(todo);
this.DataService.setTodo(this.todos)

 }

}
