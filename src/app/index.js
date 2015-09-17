'use strict';

angular.module('parachuteWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ui.bootstrap'])

.config(function ($routeProvider, RestangularProvider, Environment) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

    RestangularProvider.setBaseUrl(Environment.main);
    RestangularProvider.setResponseExtractor(function(response) {
        return response.data;
    });
})

.run(['UserModel', 'ContactModel', function(UserModel, ContactModel) {

    return UserModel.getMe()

    .then(function() {
        ContactModel.getContacts();
    });

}]);
