import React, {Component} from 'react';

export default class VisualizationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = props;

        let componentDiv = document.createElement('div');
        componentDiv.id = 'component-div-1';
        document.getElementById('calculus').appendChild(componentDiv);
        this.componentDiv = componentDiv;
    }

    render() {
        console.log('rendering visualization component');
        console.log(this.props);
        let component = new this.props.component({props: this.props, componentDiv: this.componentDiv});
        component.render();

        return (
            <div></div>
        )
    }
}