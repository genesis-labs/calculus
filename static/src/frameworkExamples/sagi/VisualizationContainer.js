import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import VisualizationComponent from '../../framework/VisualizationComponent';


class VisualizationContainer extends Component{
    constructor(props){
        super(props);
        this.componentState = {};
    }

    componentWillMount(){
        this.componentState = this.props.componentState;
    }

    shouldComponentUpdate (nextProps) {
        console.log(nextProps);
        return nextProps.newData.componentTypes.includes(this.componentState.componentType) && nextProps.newData.report === this.componentState.report;
    }

    componentWillUpdate(nextProps){
        console.log(nextProps.newData);
        this.componentState.data = Object.assign(this.componentState.data, nextProps.newData.data)
    }



    render(){
        return (
            <VisualizationComponent component={this.props.component}
                                    componentState={this.componentState}
                                    dispatch={this.props.dispatch}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newData: state.indexReducer.newData
    }
};



export default connect(mapStateToProps)(VisualizationContainer);

