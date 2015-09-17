'use strict';

angular.module('parachuteWeb')

.factory('ContactModel', function(ApiService, UserModel) {

	var contacts = [];

	var getContacts = function() {
		console.log(UserModel.me)
		return ApiService.contacts.getContacts(UserModel.me._id)

		.then(function(resp) {
			self.contacts = resp;
		});
	};

	return {
		contacts: contacts,
		getContacts: getContacts
	};
})