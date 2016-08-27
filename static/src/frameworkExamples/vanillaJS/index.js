
export default class IndexComponent {
    constructor(props) {
        this.props = props;
    }

    render() {
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = 'HI2';
        this.props.componentDiv.innerHTML = innerDiv.innerHTML;

    }
}