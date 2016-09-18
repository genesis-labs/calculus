/**
 * AngularHelper : Contains methods that help using angular without being in the scope of an angular controller or directive
 */
var AngularHelper = (function () {
    var AngularHelper = function () { };

    /**
     * ApplicationName : Default application name for the helper
     */
    var defaultApplicationName = "app";

    /**
     * Compile : Compile html with the rootScope of an application
     *  and replace the content of a target element with the compiled html
     * @$targetDom : The dom in which the compiled html should be placed
     * @htmlToCompile : The html to compile using angular
     * @applicationName : (Optionnal) The name of the application (use the default one if empty)
     */
    AngularHelper.Compile = function ($targetDom, htmlToCompile, state,applicationName) {
        var $injector = angular.injector(["ng", applicationName || defaultApplicationName]);
        // var container = angular.element($targetDom);
        $injector.invoke(["$compile", "$rootScope","$timeout", function ($compile, $rootScope, $timeout) {
            var childScope = $rootScope.$new();
            childScope.state = state;
            var el = $compile(htmlToCompile)(childScope); //($scope || $rootScope);
            $timeout(function(){
                if($targetDom.childNodes[0]){
                    $targetDom.replaceChild(el[0], $targetDom.childNodes[0]);
                }
                else {
                    $targetDom.appendChild(el[0]);
                }
            },0);
            childScope.$digest();
            childScope.state = undefined;
        }]);
    };

    return AngularHelper;
})();