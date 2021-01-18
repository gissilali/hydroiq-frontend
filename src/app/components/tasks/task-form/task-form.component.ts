import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../setenv';
import {TasksService} from '../../../services/tasks.service';
import {NgModel} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formData: any;
  dropdownList: any;
  selectedItems: any;
  dropdownSettings: any;

  constructor(private tasksService: TasksService, public usersService: UsersService, private http: HttpClient, public modalService: NgbActiveModal) {
    this.formData = {
      'name': '',
      'description': '',
      'due_date': '',
      'assigned_users': []
    };
    this.usersService.getUsers();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  ngOnInit(): void {
  }

  submitForm() {
    let year = this.formData.due_date.year;
    let month = this.formData.due_date.month;
    let day = this.formData.due_date.day;
    this.formData.due_date = `${year}-${month}-${day}`;
    this.http.post(`${environment.API_BASE_URL}/tasks/add`, this.formData)
      .subscribe(
        (response: any) => {
          const {data, message} = response;
          this.tasksService.tasks.unshift(data);
          this.modalService.close();
        },
        error => {

        }
      );
  }

  onItemSelect($event: any) {
    this.formData.assigned_users.push($event.id);
  }

  onSelectAll($event: Array<any>) {
    $event.map((user) => {
      this.formData.assigned_users.push(user.id);
    })
  }
}
