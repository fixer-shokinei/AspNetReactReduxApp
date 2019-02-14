import * as types from '../../actions/actionTypes';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import { accountsService } from '../../services/AccountsService';
import * as actions from '../../actions/account';

function* watchGetAccounts() {
    yield takeEvery(types.GET_ACCOUNTS, getAccountAsync);
}

function* getAccountAsync() {
    yield put(actions.getAccountsStarted());
    try {
        const accounts = yield call(accountsService.getAccountsAsync);
        yield put(actions.getAccountsSuccess(accounts));
    } catch (error) {
        yield put(actions.getAccountsFailure(error));
    }
}

function* watchGetAccountsById() {
    yield takeEvery(types.GET_ACCOUNTS_BYID, getAccountAsyncById);
}

function* getAccountAsyncById(action) {
    const accountId = action.accountId;
    yield put(actions.getAccountsByIDStarted(accountId));
    try {
        const account = yield call(accountsService.getAccountsByIdAsync,accountId);
        yield put(actions.getAccountsByIDSuccess(account));
    } catch (error) {
        yield put(actions.getAccountsByIDFailure(error));
    }
}


export const accountListWatcherSagas = [watchGetAccounts,watchGetAccountsById];