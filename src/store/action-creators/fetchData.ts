import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { getCargoes, getTerminals } from '../../services/http_servise';
import { DataAction, DATA_ACTIONS } from '../../types/data';

const fetchData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      const [{ data: terminals }, { data: cargoes }] = await Promise.all([getTerminals(), getCargoes()]);

      dispatch({
        type: DATA_ACTIONS.FETCH_SUCCESS,
        payload: { terminals, cargoes }
      });
    } catch (e) {
      const error = e as AxiosError;

      dispatch({
        type: DATA_ACTIONS.ERROR,
        payload: { error: error.message as string, status: error.response?.status as number }
      });
    }
  };
};

export default fetchData;
