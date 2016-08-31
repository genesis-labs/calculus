class IndexComponent {
    constructor(props) {
        this.props = props;
    }

    render() {
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = this.props.indexReducer.data;
        this.props.componentDiv.innerHTML = innerDiv.innerHTML;
        // this.props.dispatch({ type: 'DEFAULT_EVENT' , data:'Tal Peretz'});
    }
}

export default IndexComponent;