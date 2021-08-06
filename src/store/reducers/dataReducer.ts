import { DataState, DataAction, DATA_ACTIONS } from '../../types/data';
import { isString } from '../../utils/utilities';

const initialState: DataState = {
  terminals: [],
  cargoes: [],
  loading: true,
  error: '',
  status: 0,
  success: false
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case DATA_ACTIONS.START_REQUEST:
      return { ...state, loading: true };

    case DATA_ACTIONS.FETCH_SUCCESS:
      const { terminals, cargoes } = action.payload;
      return {
        ...state,
        loading: false,
        terminals,
        cargoes,
        error: isString(terminals) || isString(cargoes) ? 'error' : ''
      };

    case DATA_ACTIONS.SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: isString(action.payload) ? 'error' : ''
      };

    case DATA_ACTIONS.ERROR:
      const { error, status } = action.payload;
      return { ...state, loading: false, error, status };

    default:
      return state;
  }
};
