mdb.controller("MoviesController", function ($scope, moviesService, $location) {
	$scope.movies = moviesService.getAll();

	/**
	 * @description Navigates to the details page of the selected movie
	 * @param Number movieId the ID of the selected movie.
	 */
	$scope.seeMovie = function (movieId) {
		$location.path("/movies/" + movieId);
	};
});
