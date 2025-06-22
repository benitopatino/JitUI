import { Component } from '@angular/core';
import { EditUserProfileDto } from '../model/editUserProfileDto';
import { UserProfileService } from '../service/user-profile.service';
import { FormsModule } from '@angular/forms';
import { HttpStatusCode, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  userProfile: EditUserProfileDto = {
    firstName: '',
    lastName: '',
    title: '',
    avatarUrl: '',
    bio: '',
    city: '',
    stateOrProvince: '',
    country: '',
  };

  constructor(private userProfileService: UserProfileService, private router: Router){}

  ngOnInit(){
    this.userProfileService.getOwnProfile().subscribe({
      next: (profile) => {
        this.userProfile = profile;
      },
      error: (error) => {
        console.log('test');
      }
    })
  }

    onSubmit() {
      this.userProfileService.updateUserProfile(this.userProfile)
        .subscribe({
          next: (response: HttpResponse<any>)=>{
            if(response.status == HttpStatusCode.Ok)
              this.router.navigate(['/']);
          },
          error: (err) =>{
            console.log(err);
          }
        })

  }
}
