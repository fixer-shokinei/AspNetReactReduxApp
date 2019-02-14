import * as actionTypes from '../actions/actionTypes';

const initialState = {
    description: "",
    accounts: []
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        // GET
        case actionTypes.GET_ACCOUNTS_STARTED:
            return { ...state, refreshInProgress: true, error: null };
        case actionTypes.GET_ACCOUNTS_SUCCESS:
            return { ...state, refreshInProgress: false, error: null, accounts: action.accounts };
        case actionTypes.GET_ACCOUNTS_FAILURE:
            return { ...state, refreshInProgress: false, error: action.error.message };

        case actionTypes.GET_ACCOUNTS_BYID_STARTED:
            return { ...state, refreshInProgress: true, error: null };
        case actionTypes.GET_ACCOUNTS_BYID_SUCCESS:
            return { ...state, refreshInProgress: false, error: null, account: action.account };
        case actionTypes.GET_ACCOUNTS_BYID_FAILURE:
            return { ...state, refreshInProgress: false, error: action.error.message };

        default:
            return state;
    }
};