import {combineReducers} from 'redux';

const s = (state={
    id: 1
}, action) => state;

const rootReducer = combineReducers({
    s
});

export default rootReducer;