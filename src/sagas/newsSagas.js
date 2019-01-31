// import { delay } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import {
  GET_NEWS,
  NEWS_RECEIVED
} from "../actions/actionTypes";

const cnnUrl =
  "https://newsapi.org/v1/articles?source=cnn&apiKey=00dbcdb0b8cf47c5bb7dd8002e8ab368";

function* getNews() {
  const data = yield fetch(cnnUrl).then(res => res.json());
  yield put({ type: NEWS_RECEIVED, payload: data.articles });
}


export function* watchNews() {
  yield takeLatest(GET_NEWS, getNews);
}
