import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../setenv';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.css']
})
export class UserFormModalComponent implements OnInit {
  @Output() valueChange = new EventEmitter<any>()
  formData: any = {
    name: '',
    email: '',
    date_of_birth: ''
  }

  constructor(public modalService: NgbActiveModal, private http : HttpClient) {

  }

  ngOnInit(): void {
  }

  submitForm() {
    let year = this.formData.date_of_birth.year
    let month = this.formData.date_of_birth.month
    let day = this.formData.date_of_birth.day
    this.formData.date_of_birth = `${year}-${month}-${day}`
    this.http.post(`${environment.API_BASE_URL}/users/add`, this.formData)
      .subscribe(
        (response: any) => {
            const {user, message} = response
            this.valueChange.emit(user)
        },
        error => {

        }
      )
  }

}
