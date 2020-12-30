import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todos'
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl: string =  'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=5';

  constructor(private http:HttpClient) { 

  }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
  }
}
