import { Component } from '@angular/core';
import { NewsfeedItem } from '../models/newsfeed-item';
import { Input } from '@angular/core';
@Component({
  selector: 'app-newsfeed-item',
  imports: [],
  templateUrl: './newsfeed-item.component.html',
  styleUrl: './newsfeed-item.component.css'
})
export class NewsfeedItemComponent {
  @Input() newsfeedItem!: NewsfeedItem;
  constructor() { };


}
