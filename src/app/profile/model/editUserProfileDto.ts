export interface EditUserProfileDto {
    firstName: string;
    lastName: string;
    title?: string;
    bio?: string;
    city: string;
    stateOrProvince: string;
    country: string;
}