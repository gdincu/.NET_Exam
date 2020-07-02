export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  phone: string;
  email: string;
  isAdmin: boolean;
  PasswordHash: any;
  PasswordSalt: any;
  roles?: string[];
}
