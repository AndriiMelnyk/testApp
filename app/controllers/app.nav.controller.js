app.controller('navCtrl', function($scope, $rootScope) {

    $rootScope.collection = [{
            name: 'cats',
            state: 'cats'},{
            name: 'dogs',
            state: 'dogs'
        },{
            name:'horses',
            state: 'horses'
        },{
            name:'contact us',
            state: 'contactUs'
        }];

    $rootScope.selectedIndex = 0;

    $scope.itemClicked = function ($index) {
        $rootScope.selectedIndex = $index;
    }

});