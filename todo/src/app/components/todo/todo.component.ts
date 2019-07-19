import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import {log} from 'util';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  todo: Todo = {
    id: '',
    title: '',
    text: '',
    complete: false,
    date: '' ,
  };

  constructor() {
  }

  ngOnInit() {
    // Сюда пушатся таски

    this.todos = [  ];
  }

  // Add task
  addTodo(form){

    const now = new Date() ;

    const newTask = {
      id: String(this.todos.length + 1 ) ,
      title: this.todo.title,
      text: this.todo.text,
      complete: false,
      date: now,

    };
    this.todos.unshift(newTask);

    form.reset()

  };

//  Delete task

  deleteTask(id: string) {
    this.todos = this.todos.filter(task => task.id !== id);
  }

  // TrackBy
  // для того чтобы ngFor не перебирал весь список,а изменять только тот элемент в котором произошшли изменения
  identify(index) {
    return index;
  }
}

