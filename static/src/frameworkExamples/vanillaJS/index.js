
export default class IndexComponent {
    constructor(props) {
        this.props = props;
    }

    render() {
        console.log('rendering index component');
        console.log(this.props);
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = this.props.props.indexReducer.data;
        this.props.componentDiv.innerHTML = innerDiv.innerHTML;
        let self = this;

        setTimeout(function() {
            console.log(self);
            self.props.props.dispatch({ type: 'DEFAULT_EVENT' });
        }, 3000);
    }
}