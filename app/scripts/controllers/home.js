mdb.controller("HomeController", function ($scope, moviesService) {
	$scope.movies = moviesService.getAll();

	$scope.search = function () {
		console.log("search: " + $scope.query);
	};
});
