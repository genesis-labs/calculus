import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';
import AppFrame from './components/AppFrame';
import InitialState from '../storeUtils/InitialState';
import configureStore from '../storeUtils/ConfigureStore';


const store = configureStore(InitialState);

class Root extends Component{
    render(){
        return (
            <Provider store={store}>
                <AppFrame/>
            </Provider>
        )
    }
}

export default Root;