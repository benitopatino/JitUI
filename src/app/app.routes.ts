import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed/newsfeed.component';
import { NewsfeedService } from './newsfeed/service/newsfeed.service';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
export const routes: Routes = [

    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: NewsfeedComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'profile/:userId', component: UserProfileComponent}
];
