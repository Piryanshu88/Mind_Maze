import * as types from "./actionTypes";
const initialState = {
  loading: false,
  isLoggedIn: false,
  error: false,
  user: [],
};

interface Action {
  type: string;
  payload?: object;
}

const reducer = (state = initialState, { type, payload }: Action) => {
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
