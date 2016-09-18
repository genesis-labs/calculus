app.directive('mapDirective', function ($timeout) {
    return {
        restrict: 'EA',
        scope: {
            state: '='
        },
        template: '<leaflet width={{::state.width}} height={{::state.height}}></leaflet>',
        link: function($scope, $element, $attr) {
            console.log($scope.state);
            var dispatch = $scope.state.dispatch;
            $timeout(function(){
                dispatch({type:'DEFAULT_EVENT'})
            }, 10000);
        }
    }
});