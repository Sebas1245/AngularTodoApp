import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;

  constructor() { }

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
    console.log('toggle');
    todo.completed = !todo.completed;
  }
  onDelete(todo:Todo) {
    console.log('delete');
  }
}
