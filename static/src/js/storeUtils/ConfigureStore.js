// import { createStore, compose } from 'redux';
// import DevTools from '../root/components/DevTools';
// import rootReducer from '../root/RootReducer';
//
// const enhancer = compose(
//     DevTools.instrument()
// );
//
// export default function configureStore(initialState) {
//
//     const store = createStore(rootReducer, initialState, enhancer);
//     if (module.hot){
//         module.hot.accept('../root/RootReducer', () => {
//             store.replaceReducer(require('../root/RootReducer').default)
//         });
//     }
//     return store;
// }