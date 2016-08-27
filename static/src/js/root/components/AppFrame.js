import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import IndexComponent from '../../../frameworkExamples/vanillaJS/index';
import VisualizationComponent from '../../../framework/VisualizationComponent';
import MapComponent from '../../../frameworkExamples/angularBullshit/MapComponent'

class AppFrame extends Component{
    render(){

        return (
            <div>
                <h1>SMK ARS</h1>
                {/*<VisualizationComponent component={IndexComponent} />*/}
                <VisualizationComponent component={MapComponent} />
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);