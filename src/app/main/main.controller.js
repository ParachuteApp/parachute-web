'use strict';

angular.module('parachuteWeb')

.controller('MainCtrl', function ($scope) {

    $scope.contacts = [

        {
            companyName: 'CoffeeStrap',
            name: 'Luca De Franceschi',
            email: 'luca@coffeeStrap.com',
            website: 'www.coffeeStrap.com'
        },
        {
            companyName: 'Wondeflow',
            name: 'Giovanni Gaglione',
            email: 'giovanni@wonderflow.co',
            website: 'www.wonderflow.co'
        }
    ];

    $scope.addContact = function(newContact) {

        $scope.contacts.unshift(newContact);

    }

});
