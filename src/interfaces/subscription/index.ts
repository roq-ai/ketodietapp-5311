import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  user_id: string;
  menu_id: string;
  start_date: any;
  end_date: any;
  payment_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  menu_id?: string;
  payment_status?: string;
}
