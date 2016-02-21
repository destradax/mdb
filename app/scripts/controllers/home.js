mdb.controller("HomeController", function ($scope, moviesService, $location) {
	$scope.movies = moviesService.getRecentMovies(8).sort(function (a,b) {
		return b.rating - a.rating;
	});

	$scope.search = function () {
		if ($scope.query) {
			$location.path("/movies/search/" + $scope.query);
		} else {
			$location.path("/movies");
		}
	};
});
