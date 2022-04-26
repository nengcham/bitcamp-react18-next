import { all } from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout } from "./userSaga.ts";
import { watchAdd } from "./todoSaga.ts"


export default function* rootSaga() {
    yield all([watchJoin(), watchAdd(), watchLogin(), watchLogout()]);
  }