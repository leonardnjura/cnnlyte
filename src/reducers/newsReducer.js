import {
  GET_NEWS,
  NEWS_RECEIVED
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  success: false,
//   news: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return {
        ...state,
        news: action.payload,
        news0: action.payload[0],
        news1: action.payload[1],
        news2: action.payload[2],
        loading: false,
        success: true
      };
    default:
      return state;
  }
}
