import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchPeople } from '../../core/api/people/api';
import { FETCH_PEOPLE } from '../../constants/actionType';
import { fetchPeopleSuccess } from './slice';
import {SagaIterator} from "redux-saga";

interface PeopleWorker {
    payload: number;
}
function* peopleWorker({payload}: PeopleWorker): SagaIterator {
    try {
        const people = yield call(fetchPeople, payload);
        console.log(people);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        console.log(error);
    }
}

export function* peopleWatcher() {
    // @ts-ignore
    yield takeEvery(FETCH_PEOPLE, peopleWorker);
}