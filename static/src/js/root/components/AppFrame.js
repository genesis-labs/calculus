import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class AppFrame extends Component{
    render(){
        return (
            <div>
                <h1>Tal</h1>
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