import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed/newsfeed.component';
import { NewsfeedService } from './newsfeed/service/newsfeed.service';
export const routes: Routes = [

    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: NewsfeedComponent }
];
