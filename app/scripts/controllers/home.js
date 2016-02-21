mdb.controller("HomeController", function ($scope, moviesService) {
	$scope.movies = moviesService.getRecentMovies(8).sort(function (a,b) {
		return b.rating - a.rating;
	});

	$scope.search = function () {
		console.log("search: " + $scope.query);
	};
});
