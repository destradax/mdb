mdb.controller("MovieController", function ($scope, $routeParams, moviesService, $location) {
	$scope.movie = moviesService.get(Number($routeParams.movieId));

	/**
	 * @description Updates the current properties of the movie in the storage and redirects to the movie listing page.
	 */
	$scope.updateMovie = function () {
		moviesService.update($scope.movie);
		$location.path("/movies");
	};
});
