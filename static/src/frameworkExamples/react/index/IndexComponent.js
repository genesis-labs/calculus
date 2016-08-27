import VisualizationComponent from '../../../framework/VisualizationComponent';
import React from 'react';

export default class IndexComponent extends VisualizationComponent {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        console.log('in render');
        return (
            <div>
                <h1>HI</h1>
            </div>
        )
    }
}