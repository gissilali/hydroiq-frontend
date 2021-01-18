import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user';
import {UserFormModalComponent} from '../../components/users/user-form-modal/user-form-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users : User[]
  constructor(private usersService : UsersService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }

  open() {
    let ref = this.modalService.open(UserFormModalComponent)
  }

  updateUserList() {

  }
}
