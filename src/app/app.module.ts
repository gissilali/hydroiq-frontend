import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserFormModalComponent } from './components/users/user-form-modal/user-form-modal.component';
import {AuthTokenInterceptor} from './auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AppLayoutComponent,
    TasksPageComponent,
    UsersPageComponent,
    UserFormModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
