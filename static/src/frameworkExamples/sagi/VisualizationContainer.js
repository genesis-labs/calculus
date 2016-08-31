import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import MapComponent from './MapComponent';


class MapContainer extends Component{
    constructor(props){
        super(props);
        this.data = {
            type:'map',
            report: 'x',
            data:[{lat:1, lng:2}],
            activeCoordinate:1
        };
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.newData.type == this.data.type && nextProps.newData.report === this.data.report;
    }

    componentWillUpdate(){
        this.data = this.props.mapData
    }

    render(){
        return (
            <VisualizationComponent component={MapComponent}
                                    initialState={this.data}
                                    dispatch={this.props.dispatch}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newData: state.newData
    }
};



export default connect(mapStateToProps)(MapContainer);

