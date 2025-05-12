import { Component } from '@angular/core';
import { UserProfile } from '../model/userProfile';
import { UserProfileService } from '../service/user-profile.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userProfile: UserProfile = {
    firstName: '',
    lastName: '',
    username: '',
    newsfeedItems: []
  };

  constructor(private userProfileService: UserProfileService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const username = this.route.snapshot.paramMap.get('username');
    if(!username){
      this.router.navigate(['/']);
      return;
    }
    this.userProfileService.getUserProfile(username)
      .subscribe(
        {
          next:profile=>{this.userProfile = profile},
          error: err=>{this.router.navigate(['/'])}
        }
      );
  }

}
