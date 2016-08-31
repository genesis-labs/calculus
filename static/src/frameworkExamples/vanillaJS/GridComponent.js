class GridComponent {
    constructor(props) {
        this.props = props;

    }

    render(state) {
        let calcDiv = document.getElementById('calculus');
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = state.data;
        calcDiv.appendChild(innerDiv);
        setTimeout(()=>{
            state.dispatch({type:'DEFAULT_EVENT',data:Math.floor(Math.random()*10).toString()})
        }, 3000)
    }
}

export default GridComponent;