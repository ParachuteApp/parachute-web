'use strict';

angular.module('parachuteWeb')

.factory('UserModel', function(ApiService) {

	var me = null;

	var getMe = function() {

		var self = this;

		return ApiService.user.getUser('luca@coffeestrap.com')

		.then(function(resp) {
			console.log(resp);
			self.me = resp;
		});

	};

	return {
		me    : me,
		getMe : getMe
	};

});