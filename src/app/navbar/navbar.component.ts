import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../login/login-service/login.service';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../profile/model/userProfile';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from '../profile/service/user-profile.service';
import { UserProfileSearchDTO } from '../profile/model/userProfileSearchDTO';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery: string = '';
  results: UserProfileSearchDTO[] = [];
  isFocused = false;
  blurTimeout: any;

  constructor(public loginService: LoginService, private userProfileService: UserProfileService){}

  onSearch(){
    console.log(this.searchQuery)
    this.userProfileService.searchUserProfiles(this.searchQuery)
    .subscribe(     {
            next: (res) => {this.results = res},
            error: err => { console.log("erersr")}
          })
  }
  onBlur() {
  // Delay hiding so click events like (mousedown) still register
  this.blurTimeout = setTimeout(() => this.isFocused = false, 200);
}

selectResult(item: UserProfileSearchDTO) {
  // Navigate to user profile, etc.
  console.log('Selected:', item);
  clearTimeout(this.blurTimeout);
  this.isFocused = false;
}

}
