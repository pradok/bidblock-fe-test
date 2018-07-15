import { all, fork } from 'redux-saga/effects';
import {sagas} from '../features/crypto-pairings'

export default function* rootSaga() {
  yield all([
    fork(sagas.default)
  ]);
}
