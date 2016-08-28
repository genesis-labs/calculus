import React, {Component} from 'react';

class VisualizationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.componentDiv = this._createComponentNode();
    }

    _createComponentNode(){
        let componentDiv = document.createElement('div');
        document.getElementById('calculus').appendChild(componentDiv);
        return componentDiv;
    }

    render() {
        let component = new this.props.component({props:this.props, componentDiv: this.componentDiv});
        component.render();

        return (
            <div></div>
        )
    }
}

export default VisualizationComponent;