import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../root/components/DevTools';
import rootReducer from '../root/RootReducer';
//
// const enhancer = compose(
// //     // Middleware you want to use in development:
// //     applyMiddleware(thunkMiddleware, multi),
// //     // Required! Enable Redux DevTools with the monitors you chose
//     DevTools.instrument()
// );

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        DevTools.instrument()
    )
}