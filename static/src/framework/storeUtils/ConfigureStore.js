import { createStore, compose, applyMiddleware } from 'redux';
// import DevTools from '../root/components/DevTools';
import createReducer from './RootReducer';
import createLogger from 'redux-logger';
const logger = createLogger();

const enhancer = compose(
    applyMiddleware(logger)
    // DevTools.instrument()
);

export default function configureStore(initialState={}) {
    let store = createStore(createReducer(), initialState, enhancer);
    store.asyncReducers = {};
    return store;
    // if (module.hot){
    //     module.hot.accept('../root/RootReducer', () => {
    //         store.replaceReducer(require('../root/RootReducer').default)
    //     });
    // }
    // return store;
}

export function injectAsyncReducer(store, asyncReducer) {
    store.asyncReducers[asyncReducer.name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}

window.store = configureStore();