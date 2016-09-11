
// export default class MapComponent {
//     constructor(props) {
//         this.props = props;
//     }
//
//     render() {
//         this.props.componentDiv.setAttribute('ng-app', 'app');
//         let app = angular.module("app", ['leaflet-directive']);
//         app.directive('mapDirective', function ($compile) {
//             return {
//                 restrict: 'EA',
//                 template: '<leaflet width="640px" height="480px"></leaflet>',
//                 link: function($scope, $element, $attr) {
//                     let newElement = $compile($scope.template)($scope);
//                     this.props.componentDiv.innerHTML = newElement.innerHTML;
//                 }
//             }
//         });
//
//         this.props.componentDiv.appendChild(document.createElement('map-directive'));
//
//     }
// }

var MapComponent = function(props){
    this.props = props;
};

MapComponent.prototype.render = function(state){
    console.log('inside render');
    app.directive('mapDirective', function ($compile) {
        return {
            restrict: 'EA',
            template: '<leaflet width="640px" height="480px"></leaflet>',
            link: function($scope, $element, $attr) {
                let mapElement = $compile($scope.template)($scope);
                state.componentDiv.innerHTML = mapElement.innerHTML;
            }
        }
    });

    state.componentDiv.appendChild(document.createElement('map-directive'));
};