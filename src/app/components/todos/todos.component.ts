import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service'
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  constructor(private todoService: TodosService) { 
    this.todoService.getTodos().subscribe(serviceTodos => {
      this.todos = serviceTodos;
    });
  }

  ngOnInit(): void {
  }

}
