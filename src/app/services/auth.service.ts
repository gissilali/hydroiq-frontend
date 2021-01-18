import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../setenv';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: String
  formErrors: any
  user: User

  constructor(private http: HttpClient, private router: Router) {
    this.formErrors = {}
    if (this.isValidJson(localStorage.getItem('current_user'))) {
      let user = JSON.parse(localStorage.getItem('current_user'));
      console.log({user})
      if (user) {
        this.user = user
      }
    }


  }

  attemptLogin(formData: any): void {
    this.http.post(environment.API_BASE_URL + '/login', formData)
      .subscribe(
        (result: any) => {
          localStorage.setItem('access_token', result.tokens.access_token)
          localStorage.setItem('current_user', JSON.stringify(result.user))
          this.router.navigate(['']);
        },
        ({error, status}) => {
          console.log({error})
          this.formErrors = error.errors;
        }
      )
  }

  userIsLoggedIn(): boolean {
     this.accessToken = localStorage.getItem('access_token');
    return this.accessToken != null;
  }

  isValidJson(string: string): boolean {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.setItem('access_token', null)
    localStorage.setItem('current_user', null);
  }
}
