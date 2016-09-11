angular
    .module('app')
    .directive('mapComponent', mapComponent);

function mapComponent() {
    var directive = {
        restrict: 'EA',
        templateUrl: '/static/src/app/app.html',
        scope: {
            max: '='
        },
        link:link,
        controller: ExampleController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    function link(scope, el, attr, ctrl) {
        console.log(scope);
    }
}

function ExampleController() {
    var vm = this;
    vm.min = 3;
    console.log('CTRL: vm.min = %s', vm.min);
    console.log('CTRL: vm.max = %s', vm.max);
}