import { Dispatch } from "react";
import { getCargoes, getTerminals } from "../../services/http_servise";
import { DataAction, FETCH_DATA_ACTIONS } from "../../types/data";

const fetchData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      const [{ data: terminals }, { data: cargoes }] = await Promise.all([
        getTerminals(), getCargoes()
      ]);

      dispatch({
        type: FETCH_DATA_ACTIONS.SUCCESS,
        payload: { terminals, cargoes },
      });

    } catch (e) {

      dispatch({
        type: FETCH_DATA_ACTIONS.ERROR,
        payload: "something went wrong",
      });
    }
  };
};

export default fetchData;
