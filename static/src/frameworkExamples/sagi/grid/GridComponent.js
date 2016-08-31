class GridComponent {
    constructor(props) {
        this.props = props;
        this.data={}
    }

    translateData(rowData){
        this.data = {
            head: rowData.cord[0].lat,
            body: rowData.cord[0].lng
        }
    }

    render() {
        this.translateData(this.props.componentState.data);
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = this.data.head;
        setTimeout(()=>{
            this.props.dispatch({type:'UPDATE_DATA', newData:{
                componentTypes:['map'],
                report:'x',
                data:{
                    cord:[{lat:this.data.head, lng: this.data.body}]
                }
            }});
        }, 3000);
        this.props.componentDiv.innerHTML = innerDiv.innerHTML;
    }
}

export default GridComponent;