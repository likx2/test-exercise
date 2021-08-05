import Cargo from './item';
import Terminal from './item';

export enum DATA_ACTIONS {
  START_REQUEST = 'START_REQUEST',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  SEND_SUCCESS = 'SEND_SUCCESS',
  ERROR = 'ERROR'
}

export interface StartRequestAction {
  type: DATA_ACTIONS.START_REQUEST;
}

export interface FetchSuccessAction {
  type: DATA_ACTIONS.FETCH_SUCCESS;
  payload: {
    terminals: Terminal[];
    cargoes: Cargo[];
  };
}

export interface SendSuccessAction {
  type: DATA_ACTIONS.SEND_SUCCESS;
  payload?: string;
}

export interface ErrorAction {
  type: DATA_ACTIONS.ERROR;
  payload: { error: string; status: number };
}

export type DataAction = StartRequestAction | FetchSuccessAction | SendSuccessAction | ErrorAction;

export interface DataState {
  terminals: Terminal[];
  cargoes: Cargo[];
  loading: boolean;
  error: string;
  status: number;
  success: boolean;
}
