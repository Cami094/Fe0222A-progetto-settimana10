import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class DataService {
todos !: Todo[]
  constructor (){

  }
  getTodo (){
    return this.todos
  }
  setTodo (task:Todo[]){
    this.todos = task;

  }
}
