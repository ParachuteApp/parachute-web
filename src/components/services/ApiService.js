'use strict';

angular.module('parachuteWeb')

.service('ApiService', function(Restangular, $q) {

	var contacts = {

		createContact: function(payload, userId, fullResponse) {
			(fullResponse?  Restangular.setFullResponse(true):  Restangular.setFullResponse(false));
			return Restangular.one('contacts', userId)
			.post(payload);

		},

		getContacts: function(userId, fullResponse) {
			(fullResponse?  Restangular.setFullResponse(true):  Restangular.setFullResponse(false));
			return Restangular.one('contacts', userId)
			.get();
		}

	};

	var user = {

		createUser: function(payload, fullResponse) {
			(fullResponse?  Restangular.setFullResponse(true):  Restangular.setFullResponse(false));
			return Restangular.one('user')
			.post(payload);
		},

		getUser: function(userEmail, fullResponse) {
			(fullResponse? Restangular.setFullResponse(true):  Restangular.setFullResponse(false));
			return Restangular.one('user', userEmail)
			.get();
		}

	};

	return {
		contacts: contacts,
		user: user
	}

});