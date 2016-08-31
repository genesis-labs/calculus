class MapComponent {
    constructor(props) {
        this.props = props;
    }

    translateData(rowData){
        this.data = {
            lat: rowData.cord[0].lat,
            lng: rowData.cord[0].lng
        }
    }

    render() {
        this.translateData(this.props.componentState.data);
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = this.data.lat;
        this.props.componentDiv.innerHTML = innerDiv.innerHTML;
    }
}

export default MapComponent;