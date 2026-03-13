import { Request, Response } from 'express';
import { getAllUsers } from '../services/user.service';

export const listUsers = (_req: Request, res: Response) => {
  const users = getAllUsers();
  res.status(200).json(users);
};
