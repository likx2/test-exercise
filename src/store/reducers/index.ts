import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { itemReducer } from "./itemReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  items: itemReducer
});
