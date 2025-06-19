import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed/newsfeed.component';
import { NewsfeedService } from './newsfeed/service/newsfeed.service';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [

    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[authGuard]},
    { path: 'profile', component: UserProfileComponent,canActivate:[authGuard] },
    { path: '', component: NewsfeedComponent,canActivate:[authGuard] },
    { path: ':username', component: UserProfileComponent, canActivate:[authGuard]},

];
