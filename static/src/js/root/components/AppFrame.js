import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class AppFrame extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )}
}

AppFrame.propTypes = {
    children: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);