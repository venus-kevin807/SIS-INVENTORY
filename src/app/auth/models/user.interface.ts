export interface User {
  id: number;
  username: string;
  role: 'admin' | 'user';
}

export interface UserWithPassword extends User {
  password: string;
}
