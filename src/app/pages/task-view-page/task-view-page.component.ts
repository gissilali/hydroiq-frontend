import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-task-view-page',
  templateUrl: './task-view-page.component.html',
  styleUrls: ['./task-view-page.component.css']
})
export class TaskViewPageComponent implements OnInit {
  task: any;
  id: any;

  constructor(private route: ActivatedRoute, public tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.tasksService.showTask(params.id)
    });
  }

}
