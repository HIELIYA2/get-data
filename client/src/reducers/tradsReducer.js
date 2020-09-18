import { GET_TRADS } from '../actions/types';

const initialState = {
  trads: [],
  trad: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRADS:
      return {
        ...state,
        trads: action.payload,
      };
    default:
      return state;
  }
};
