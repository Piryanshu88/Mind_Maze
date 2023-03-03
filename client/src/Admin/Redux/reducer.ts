const initialState = {
  loading: false,
  isLoggedIn: false,
  error: false,
  user: [],
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    default:
      return state;
  }
};

export { reducer };
