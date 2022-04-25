import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../reducers/todoReducer.ts'
import { postTodo } from '../api/todoApi.ts'

interface TodoType{
    type: string;
    payload: {userid: string, task: string, completed: string}
}

interface TodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

function* add(todo: TodoType){
    try{
        alert(' 진행 3: saga내부 todo add 성공  '+ JSON.stringify(todo))
        const response : TodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 add 실패  ') 
         yield put(todoActions.addFailure(error))
    }
}
export function* watchAdd(){
    yield takeLatest(todoActions.addRequest, add)
}


