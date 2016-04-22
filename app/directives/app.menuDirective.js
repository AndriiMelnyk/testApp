app.directive('menu', function() {
    return {
        restrict: 'E',
        scope: {
            visible: '='
        },
        templateUrl: 'app/directives/templates/menu.html',
        controller: function($scope, $rootScope){
            $scope.toggleMenu = function(i){
                angular.element( document.querySelector('.block-wrapper')).toggleClass('show');
                angular.element( document.querySelector('.subMenuWrapper')).toggleClass('show');
                angular.element( document.querySelector('.subMenuWrapper')).toggleClass('hide');
                $scope.visible = !$scope.visible;
                $rootScope.selectedIndex = i;
            }
        }
    };
})