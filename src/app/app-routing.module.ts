import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuard} from './guards/auth.guard';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TasksPageComponent} from './pages/tasks-page/tasks-page.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'tasks', component: TasksPageComponent},
      {path: 'users', component: UsersPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
