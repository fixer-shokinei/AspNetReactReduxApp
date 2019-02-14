import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as AccountList from '../reducers/acountReducer';
import { sagas } from '../sagas';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


export function configureStore(history, initialState) {
    const reducers = {
        
        accountList: AccountList.reducer
    };

    const sagaMiddleware = createSagaMiddleware();

    const loggerMiddleware = createLogger({collapsed: true});

    const middleware = [
        sagaMiddleware,
        loggerMiddleware,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

 

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    sagas.map(saga => sagaMiddleware.run(saga));

    return store;
}
