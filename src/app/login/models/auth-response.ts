export interface AuthResponse {

  token?: string;
  expiration?: Date;
  issuedAt?: Date;
  isAuthenticated: boolean;
  error?: string;

} 
