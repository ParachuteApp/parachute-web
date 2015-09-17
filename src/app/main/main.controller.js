'use strict';

angular.module('parachuteWeb')

.controller('MainCtrl', function ($scope) {

    $scope.contacts = [
        
        {
            companyName: 'CoffeeStrap',
            email: 'info@coffeestrap.com',
            firstName: 'Luca',
            lastName: 'De Franceschi',
            note: 'Contacted on 4th of July'
        },
        {
            companyName: 'CoffeeStrap',
            email: 'info@coffeestrap.com',
            firstName: 'Luca',
            lastName: 'De Franceschi',
            note: 'Contacted on 4th of July'
        },
        {
            companyName: 'CoffeeStrap',
            email: 'info@coffeestrap.com',
            firstName: 'Luca',
            lastName: 'De Franceschi',
            note: 'Contacted on 4th of July'
        }

    ];

    $scope.addNewContact = function() {

        if ($scope.newContact.email && $scope.newContact.companyName) {

            $scope.contacts.unshift($scope.newContact);

        }

    };

});
