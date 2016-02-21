mdb.controller("HomeController", function ($scope, moviesService) {
	$scope.movies = moviesService.getSampleMovies();

	$scope.search = function () {
		console.log("search: " + $scope.query);
	};
});
