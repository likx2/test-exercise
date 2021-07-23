import axios from "axios";
import { Dispatch } from "react";
import { DataAction, FETCH_DATA_ACTIONS } from "../../types/data";

const fetchData = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      const [{ data: terminals }, { data: cargoes }] = await Promise.all([
        axios.get(
          "https://bc-development.azurewebsites.net/api/recruitment/terminals"
        ),
        axios.get(
          "https://bc-development.azurewebsites.net/api/recruitment/cargoes"
        ),
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
