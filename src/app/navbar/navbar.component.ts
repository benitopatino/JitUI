import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(public loginService: LoginService, private userProfileService: UserProfileService, private router: Router){}

  onSearch(){
    this.userProfileService.searchUserProfiles(this.searchQuery)
    .subscribe(     {
            next: (res) => {this.results = res},
            error: err => { console.log(err)}
          })
  }
  onBlur() {
  // Delay hiding so click events like (mousedown) still register
  this.blurTimeout = setTimeout(() => this.isFocused = false, 200);
}

selectResult(item: UserProfileSearchDTO) {
  this.searchQuery = '';  
  this.router.navigate(['/' + item.username]);
  clearTimeout(this.blurTimeout);
  this.isFocused = false;
}

}
