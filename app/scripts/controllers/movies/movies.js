mdb.controller("MoviesController", function ($scope, moviesService, $location, $routeParams) {
	$scope.movies = moviesService.getAll();
	if ($routeParams.query) {
		var regex = new RegExp($routeParams.query, "i");
		$scope.movies = $scope.movies.filter(function (movie) {
			return regex.test(movie.title);
		});
	}

	/**
	 * @description Navigates to the details page of the selected movie
	 * @param Number movieId the ID of the selected movie.
	 */
	$scope.seeMovie = function (movieId) {
		$location.path("/movies/" + movieId);
	};
});
