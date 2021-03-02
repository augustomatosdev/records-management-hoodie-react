import { SET_OFFICES, SET_ERROR } from "../types";

const initialState = {
  offices: [],
  error: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_OFFICES: {
      return {
        ...state,
        offices: action.payload,
      };
    }
    default:
      return state;
  }
}
