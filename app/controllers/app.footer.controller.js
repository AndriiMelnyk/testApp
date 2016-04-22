app.controller('footerCtrl', function ($scope, $uibModal) {

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ModalCtrl',
            size: 'md',
        });
    }

})

app.controller('ModalCtrl', function ($scope, $uibModalInstance) {
    $scope.ok = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        console.log('Dont need help!');
        $uibModalInstance.dismiss('cancel');
    };
})


