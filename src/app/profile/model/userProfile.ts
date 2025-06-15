import { NewsfeedItem } from "../../newsfeed/models/newsfeed-item";
export interface UserProfile {
    firstName: string;
    lastName: string;
    username: string;
    title: string;
    avatarUrl: string;
    bio: string;
    city: string;
    stateOrProvince: string;
    country: string;
    followerCount: number;
    followeeCount: number;
    newsfeedItems: NewsfeedItem[];
}
