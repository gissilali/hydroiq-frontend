import { Component, OnInit } from '@angular/core';
import {UserFormModalComponent} from '../../components/users/user-form-modal/user-form-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TasksService} from '../../services/tasks.service';
import {TaskFormComponent} from '../../components/tasks/task-form/task-form.component';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  constructor(public tasksService : TasksService , private modalService : NgbModal) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
  }

  open() {
    let ref = this.modalService.open(TaskFormComponent)
  }
}
