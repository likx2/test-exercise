import axios from 'axios';
import { ItemState } from '../types/item';

export const getTerminals = () => {
  return axios.get('https://bc-development.azurewebsites.net/api/recruitment/terminals');
};

export const getCargoes = () => {
  return axios.get('https://bc-development.azurewebsites.net/api/recruitment/cargoes');
};

export const sendItems = (items: ItemState) => {
  return axios.post('https://bc-development.azurewebsites.net/api/recruitment/saverotation', { terminals: items });
};
