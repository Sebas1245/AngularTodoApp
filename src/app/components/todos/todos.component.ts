import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service'
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodosService) { 
    
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(serviceTodos => {
      this.todos = serviceTodos;
    });
  }

  deleteTodo(todo: Todo){
    // Remove from UI
    this.todos = this.todos?.filter(t => t.id !== todo.id)
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(addedTodo => {
      this.todos.push(addedTodo);
    })
  }
}
