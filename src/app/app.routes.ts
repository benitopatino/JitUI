import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed/newsfeed.component';
import { NewsfeedService } from './newsfeed/service/newsfeed.service';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
export const routes: Routes = [

    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'profile', component: UserProfileComponent },
    { path: '', component: NewsfeedComponent },
    { path: ':username', component: UserProfileComponent},

];
