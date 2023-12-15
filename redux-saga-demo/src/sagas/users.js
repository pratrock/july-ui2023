import { takeEvery, takeLatest, call, fork, put, take } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users'; 

//worker sagas - casues state changes
function* getUers(){
    try{
        const result = yield call(api.getUers)
        yield put(actions.getUsersSuccess({
            items:result.data
        }))
    }
    catch(e){

    }
}

function* createUser(action){
    // console.log(action)
    // yield
    try{
       yield call(api.createUser, {firstName:action.payload.firstName, 
        lastName:action.payload.lastName})
        yield call(getUers)
    }
    catch(e){}
}
function* deleteUser(userId){
   yield call(api.deleteUser, userId)//call to api will resolve
   yield call(getUers)
}

//watcher sagas -- listens for an action to be dispatched
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUers)//while(true)
} 
function* watchCreateUsersRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)//while(true)
} 

function* watchDeleteUsersRequest(){
    try{
       while(true){
        const action = yield take(actions.Types.DELETE_USER_REQUEST)//while(true)
        yield call(deleteUser, {
            userId:action.payload.userId
        })
       }
    }catch(e){}
    
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUsersRequest),
    fork(watchDeleteUsersRequest)
]

export default userSagas;

