mdb.controller("ApplicationController", function ($scope, moviesService, actorsService) {

	$scope.init = function () {
		moviesService.getAll();
		actorsService.getAll();
	};
});
