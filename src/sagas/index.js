import { all } from 'redux-saga/effects';
import { watchNews } from './newsSagas';
import { watchProfile } from './profileSagas';

export default function* rootSaga() {
  yield all([
    // watchLogin(),
    watchNews(),
    watchProfile()
  ]);
}
