app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/main.html'
        })
        
        .state('cats', {
            url: '/cats',
            templateUrl: 'app/views/cats.html'
        })

        .state('dogs', {
            url: '/dogs',
            templateUrl: 'app/views/dogs.html'
        })

        .state('horses', {
            url: '/horses',
            templateUrl: 'app/views/horses.html'
        })

        .state('contactUs', {
            url: '/contactUs',
            templateUrl: 'app/views/contactUs.html'
        })
        
});