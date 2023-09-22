import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DietitianInterface {
  id?: string;
  user_id: string;
  qualification: string;
  experience: number;
  specialization: string;
  availability: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DietitianGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  qualification?: string;
  specialization?: string;
}
