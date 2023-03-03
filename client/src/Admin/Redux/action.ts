import axios, { AxiosResponse } from "axios";
import * as types from "./actionTypes";
import { Payload } from "./reducer";

interface userData {
  data: object[];
  status: string;
}
export let userDataRequest = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export let useDataSuc = (user: userData) => {
  return {
    type: types.GET_DATA_SUC,
    payload: user,
  };
};

export let useDataErr = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};

let getDataUser = async () => {
  const response: AxiosResponse<Payload> = await axios.get(
    "https://lazy-tan-shrimp-tux.cyclic.app/user/all-users"
  );

  return response.data;
};

export { getDataUser };
