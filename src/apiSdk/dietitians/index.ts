import axios from 'axios';
import queryString from 'query-string';
import { DietitianInterface, DietitianGetQueryInterface } from 'interfaces/dietitian';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDietitians = async (
  query?: DietitianGetQueryInterface,
): Promise<PaginatedInterface<DietitianInterface>> => {
  const response = await axios.get('/api/dietitians', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDietitian = async (dietitian: DietitianInterface) => {
  const response = await axios.post('/api/dietitians', dietitian);
  return response.data;
};

export const updateDietitianById = async (id: string, dietitian: DietitianInterface) => {
  const response = await axios.put(`/api/dietitians/${id}`, dietitian);
  return response.data;
};

export const getDietitianById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dietitians/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDietitianById = async (id: string) => {
  const response = await axios.delete(`/api/dietitians/${id}`);
  return response.data;
};
