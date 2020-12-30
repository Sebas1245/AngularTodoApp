import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Eat dinner',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: true
      },
      {
        id: 3,
        title: 'Give Bousa medicine',
        completed: true
      },
      
    ]
  }

}
