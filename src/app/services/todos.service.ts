import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos() {
    return [
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
