import { DataState, DataAction, DATA_ACTIONS } from '../../types/data';

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
      return { ...state, loading: false, terminals, cargoes };

    case DATA_ACTIONS.SEND_SUCCESS:
      return { ...state, loading: false, success: true, error: action.payload ? action.payload : '' };

    case DATA_ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, status: action.payload.status };

    default:
      return state;
  }
};
