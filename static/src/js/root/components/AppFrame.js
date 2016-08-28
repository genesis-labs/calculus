import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import IndexComponent from '../../../frameworkExamples/vanillaJS/index';
import VisualizationComponent from '../../../framework/VisualizationComponent';
import MapComponent from '../../../frameworkExamples/angularBullshit/MapComponent'

class AppFrame extends Component{
    render(){
        return (
            <div>
                <h1>sdfgsdfgsdfg</h1>
                <VisualizationComponent component={IndexComponent} {...this.props} />
                {/*<VisualizationComponent component={MapComponent} {...this.props} />*/}
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        indexReducer: state.indexReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default connect(mapStateToProps)(AppFrame);