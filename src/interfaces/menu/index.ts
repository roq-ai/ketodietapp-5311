import { ScheduleInterface } from 'interfaces/schedule';
import { SubscriptionInterface } from 'interfaces/subscription';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  subscription?: SubscriptionInterface[];

  _count?: {
    schedule?: number;
    subscription?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
