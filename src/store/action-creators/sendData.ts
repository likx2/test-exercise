import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { sendItems } from '../../services/http_servise';
import { DataAction, DATA_ACTIONS } from '../../types/data';
import { ItemState } from '../../types/item';

const sendData = (items: ItemState) => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      const response = await sendItems(items);

      dispatch({
        type: DATA_ACTIONS.SEND_SUCCESS,
        payload: response.data
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

export default sendData;
