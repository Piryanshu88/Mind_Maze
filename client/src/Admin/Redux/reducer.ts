import * as types from "./actionTypes";

export interface State {
  loading: boolean;
  isLoggedIn: boolean;
  error: boolean;
  user: object[];
}

const initialState: State = {
  loading: false,
  isLoggedIn: false,
  error: false,
  user: [],
};

export interface users {
  firstName: string;
  lastName: string;
  _id: string;
  points: number;
  email: string;
  password: string;
}
export interface Payload {
  data: users[];
  status: string;
}
interface Action {
  type: string;
  payload: Payload;
}

const reducer = (state = initialState, { type, payload }: Action) => {
  console.log(type, payload);
  switch (type) {
    case types.GET_DATA_REQ:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_SUC:
      return {
        ...state,
        loading: false,
        user: payload.data,
      };
    case types.GET_DATA_ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export { reducer };
