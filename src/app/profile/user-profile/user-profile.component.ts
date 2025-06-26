import { Component } from '@angular/core';
import { UserProfile } from '../model/userProfile';
import { UserProfileService } from '../service/user-profile.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrderByDatePipe } from '../../pipes/order-by-date.pipe';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, OrderByDatePipe, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
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

  constructor(private userProfileService: UserProfileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
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

}
