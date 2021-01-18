import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {environment} from '../../../setenv';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUsers()  {
    this.http.get(`${environment.API_BASE_URL}/users`)
      .subscribe(
        response => {
            console.log({response})
        },
        error => {

        }
      )
    return []
  }
}
