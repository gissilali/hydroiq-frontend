import { Injectable } from '@angular/core';
import {Task} from '../interfaces/task';
import {environment} from '../../../setenv';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[]
  currentTask: any;

  constructor(private http : HttpClient) {
    this.tasks = []
  }

  getTasks() {
    return this.http.get(`${environment.API_BASE_URL}/tasks`)
      .subscribe(
        (response : any) => {
          const { data } = response
          this.tasks = data
        },
        error => {

        }
      )
  }

  showTask(id : any) {
    this.http.get(`${environment.API_BASE_URL}/tasks/${id}`)
      .subscribe(
        (response : any) => {
          const { data } = response
          this.currentTask = data
        },
        error => {

        }
      )
  }
}
