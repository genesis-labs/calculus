
class IndexComponent {
    constructor(props) {
        this.props = props;
        console.log(this.props);
    }

    render() {
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = this.props.props.indexReducer.data; // this.props.state.data
        this.props.componentDiv.innerHTML = innerDiv.innerHTML; //
        //this.props.props.dispatch({ type: 'DEFAULT_EVENT' , data:'Tal Peretz'}); // this.props.dispatch
    }
}

export default IndexComponent;