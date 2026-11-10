import type { User } from './user';

export type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
