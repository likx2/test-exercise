import DataState, { DataAction, FETCH_DATA_ACTIONS } from "../../types/data";

const initialState: DataState = {
  terminals: [],
  cargoes: [],
  loading: true,
  error: "",
};

export const dataReducer = (
  state = initialState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case FETCH_DATA_ACTIONS.SUCCESS:
      const { terminals, cargoes } = action.payload;
      return { ...state, loading: false, terminals, cargoes };

    case FETCH_DATA_ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
