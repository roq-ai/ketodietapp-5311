import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  user_id: string;
  menu_id: string;
  date: any;
  meal_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  menu_id?: string;
}
