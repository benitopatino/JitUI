import { Component } from '@angular/core';
import { UserProfile } from '../model/userProfile';
import { UserProfileService } from '../service/user-profile.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrderByDatePipe } from '../../pipes/order-by-date.pipe';
import { LoginService } from '../../login/login-service/login.service';
import { FollowUserService } from '../../follows/service/follow-user.service';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, OrderByDatePipe, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  showEditProfile: boolean = false;
  showFollow: boolean = false;
  isAlreadyFollowing: boolean = false;
  userProfile: UserProfile = {
    firstName: '',
    lastName: '',
    username: '',
    title: '',
    avatarUrl: '',
    bio: '',
    city: '',
    stateOrProvince: '',
    country: '',
    followeeCount: 0,
    followerCount: 0,
    newsfeedItems: []
  };

  constructor(private userProfileService: UserProfileService, private route: ActivatedRoute, private router: Router, private loginService: LoginService, private followService: FollowUserService) { }

  ngOnInit(): void {
    const username:string | null = this.route.snapshot.paramMap.get('username');

    this.checkRoute(this.router.url);
    this.showFollow = !this.isOwnProfile(username)
    this.alreadyFollowing(username);

    if (!username) {
      this.userProfileService.getOwnProfile()
        .subscribe(
          {
            next: profile => { this.userProfile = profile },
            error: err => { this.router.navigate(['/']) }
          }
        );
    }
    else
    {
      this.userProfileService.getUserProfile(username)
        .subscribe(
          {
            next: profile => { this.userProfile = profile },
            error: err => { this.router.navigate(['/']) }
          }
        );
    }

  }

  followUnfollow(): void
  {
    if(this.isAlreadyFollowing)
    {
         this.followService.unfollow(this.userProfile.username)
        .subscribe({
          next:res => {this.isAlreadyFollowing=false},
          error: err => console.log('ERROR: ' + err)
        });
    }
    else{
      this.followService.follow(this.userProfile.username)
        .subscribe({
          next:res => {this.isAlreadyFollowing=true},
          error: err => console.log('ERROR: ' + err)
        });
    }

  }

  private checkRoute(url: string): boolean
  {
    return this.showEditProfile = (url === '/profile');
  }

  private isOwnProfile(username: string | null): boolean{
    const loggedInUser:string = this.loginService.getLoggedOnUser();
    if(username){
      return (username === loggedInUser);
    }
    return true;
  }

  private alreadyFollowing(username: string | null): void{
    if(username)
    {
      this.followService.getListOfFollowees()
        .subscribe({
          next: res => {
            const followees: Array<string> = res.body;
            const exists: boolean = followees.map(f => f.toLowerCase()).includes(username.toLowerCase());
            this.isAlreadyFollowing = exists;

          },
          error: err => {this.isAlreadyFollowing = false;}
        })
    }
    else{
      this.isAlreadyFollowing = false;
    }

  }

}
