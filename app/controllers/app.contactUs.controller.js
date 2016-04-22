app.controller('ContactUsCtrl', function ($scope, $timeout) {

    $scope.user = {};
    $scope.showMessage = false;

    $scope.send = function() {
        $timeout(function() {
            $scope.showMessage = false;
        }, 3000);
        $scope.showMessage = true;
    };
})