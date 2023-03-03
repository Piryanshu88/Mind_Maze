import axios from "axios";
import * as types from "./actionTypes"; 

interface userData {
  data: object[];
  status: string;
}
export const userDataRequest = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export const useDataSuc = (user: userData) => {
  return {
    type: types.GET_DATA_SUC,
    payload: user,
  };
};

export const useDataErr = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};

const getDataUser = () => (dispatch: any) => {
  dispatch(userDataRequest());
  return axios.get("https://lazy-tan-shrimp-tux.cyclic.app/user/all-user");
};
