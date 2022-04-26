import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"

function* addUser(action){
    try{
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESS,
            payload: newUser.data
        }) 
    }catch(error){
        yield put({
            type: T.USER_ADD_FAIL,
            payload: error.message
        })
    }
}
function* login(action){
    try{
        alert('4 >>> saga call')
      const res = yield call(loginApi, action.data)
      yield put({
        type: T.LOGIN_SUCCESS,
        data: res.data
      })
    } catch (err) {
      yield put({
        type: T.LOGIN_FAIL,
        error: err.response.data
      })
    }
  }

function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUEST, addUser)
}
function* watchLogin(){
    alert('3 >>> saga watch')
    yield takeLatest(T.LOGIN_REQUEST, login)
}


