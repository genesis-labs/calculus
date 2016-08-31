import {injectAsyncReducer} from './storeUtils/ConfigureStore';

class Calculus {
    constructor(component, reducer) {
        this.component = component;
        this.reducer = reducer;
        this._injectComponent = this._injectComponent.bind(this);
        this._getComponentState = this._getComponentState.bind(this);
        this.render = this.render.bind(this);
        this._injectComponent();
        this.component = new this.component({...this._getComponentState(), dispatch: store.dispatch});
    }

    _getComponentState(){
        return store.getState()[this.reducer.name];

    }

    // _createComponentNode(){
    //     let componentDiv = document.createElement('div');
    //     document.getElementById('calculus').appendChild(componentDiv);
    //     return componentDiv;
    // }

    _injectComponent() {
        injectAsyncReducer(store, this.reducer);
        store.subscribe(this.render);
    }

    render() {
        this.component.render({...this._getComponentState(), dispatch: store.dispatch});
    }
}

export default Calculus;