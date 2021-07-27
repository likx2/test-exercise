import DataState from "./data";
import { ItemState } from "./item";

export default interface GLobalState {
  data: DataState;
  items: ItemState
}
