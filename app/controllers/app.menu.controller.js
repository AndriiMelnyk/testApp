app.controller('MenuController', function ($scope, $timeout, $rootScope, blockUI) {
    $scope.showMenu = false;
    $scope.sublinks = null;
    $scope.activeItem = null;

    var myBlock = blockUI.instances.get('myBlock');
    var button = document.getElementById('clickMe');

    button.addEventListener('click', buttonClicked);

        function buttonClicked ()  {
            $scope.$apply(function()  {
                $scope.showMenu = false;
                angular.element( document.querySelector('.block-wrapper')).removeClass('show');
                myBlock.stop();
            });
        }

        $scope.showSubMenu = function() {
            angular.element( document.querySelector('.block-wrapper')).addClass('show');
            angular.element( document.querySelector('.subMenuWrapper')).removeClass('hide');
            angular.element( document.querySelector('.subMenuWrapper')).addClass('show');

            if(myBlock.state().blocking) {
                myBlock.stop();
            } else {
                myBlock.start({
                    message: false,
                    myProperty: ''
                });
                
              }

            $timeout(function() {
                $scope.showMenu = !$scope.showMenu;
            }, 500);
       };
})