import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed/newsfeed.component';
export const routes: Routes = [

    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: NewsfeedComponent }
];
