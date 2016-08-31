import React, {Component} from 'react';
// import { connect } from 'react-redux';


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
        let component = new this.props.component({...this.props, componentDiv: this.componentDiv});
        component.render();

        return (
            <div></div>
        )
    }
}
//
// const mapStateToProps = (state, ownProps) => {
//     let stateData = {};
//     stateData['state'] = state[ownProps.component.name + 'Reducer'];
//     return stateData;
// };

export default VisualizationComponent;