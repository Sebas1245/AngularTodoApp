import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';

import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodosService) { 

  }

  ngOnInit(): void {
  }

  // set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo:Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe( completedTodo => {
      console.log(completedTodo);
    })
  }
  onDelete(todo:Todo) {
    this.deleteTodo.emit(todo);
  }
}
