import { NewsfeedItem } from "../../newsfeed/models/newsfeed-item";
export interface UserProfile {
    firstName: string;
    lastName: string;
    username: string;
    newsfeedItems: NewsfeedItem[];
  }