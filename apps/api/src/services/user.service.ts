import { User } from '../models/user.model';

const users: User[] = [
  { id: 1, name: 'Alex', email: 'alex@example.com' },
  { id: 2, name: 'Sam', email: 'sam@example.com' }
];

export const getAllUsers = (): User[] => users;
