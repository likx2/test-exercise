import Cargo from "./Cargo";

import Terminal from "./Terminal";

export enum FETCH_DATA_ACTIONS {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface SuccessAction {
  type: FETCH_DATA_ACTIONS.SUCCESS;
  payload: {
    terminals: Terminal[];
    cargoes: Cargo[];
  };
}

export interface ErrorAction {
  type: FETCH_DATA_ACTIONS.ERROR;
  payload: string;
}

export type DataAction = SuccessAction | ErrorAction;

export default interface DataState {
  terminals: Terminal[];
  cargoes: Cargo[];
  loading: boolean;
  error: string;
}
