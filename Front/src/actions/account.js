import * as types from './actionTypes';


// GET

export function getAccounts() {
    return {
        type: types.GET_ACCOUNTS
    };
}

export function getAccountsStarted() {
    return {
        type: types.GET_ACCOUNTS_STARTED
    };
}

export function getAccountsSuccess(accounts) {
    return {
        type: types.GET_ACCOUNTS_SUCCESS,
        accounts: accounts
    };
}

export function getAccountsFailure(error) {
    return {
        type: types.GET_ACCOUNTS_FAILURE,
        error: error
    };
}

// GET BY ID
export function getAccountsByID(accountId) {
    return {
        type: types.GET_ACCOUNTS_BYID,
        accountId:accountId
    };
}

export function getAccountsByIDStarted(accountId) {
    return {
        type: types.GET_ACCOUNTS_BYID_STARTED,
        accountId:accountId
    };
}

export function getAccountsByIDSuccess(account) {
    return {
        type: types.GET_ACCOUNTS_BYID_SUCCESS,
        account: account
    };
}

export function getAccountsByIDFailure(error) {
    return {
        type: types.GET_ACCOUNTS_BYID_FAILURE,
        error: error
    };
}
