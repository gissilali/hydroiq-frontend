import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user : User

  constructor(private authService: AuthService) {
    this.user = authService.user
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }
}
