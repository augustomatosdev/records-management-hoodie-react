import { GET_RECORDS } from "../types";

const initialState = {
  documents: [],
  error: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS: {
      return {
        ...state,
        documents: action.payload,
      };
    }
    default:
      return state;
  }
}
