import { Component } from '@angular/core';
import { NewsfeedItem } from '../models/newsfeed-item';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newsfeed-item',
  imports: [CommonModule],
  templateUrl: './newsfeed-item.component.html',
  styleUrl: './newsfeed-item.component.css'
})
export class NewsfeedItemComponent {
  @Input() newsfeedItem!: NewsfeedItem;
  constructor(private router: Router) { };

  selectResult(username: string) {
    this.router.navigate(['/' + username]);
  }
}
