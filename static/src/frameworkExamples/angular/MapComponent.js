var MapComponent = function(props){
    this.props = props;
};

MapComponent.prototype.render = function(state){
    console.log('in render');
    var el = '<map-directive state="state"></map-directive>';
    AngularHelper.Compile(state.componentDiv, el, state);
    console.log('finishRender');
};