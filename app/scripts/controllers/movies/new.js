mdb.controller("NewMovieController", function ($scope, $location, moviesService) {

	/**
	 * @description Saves the movie to the storage and redirects to the movie listing page.
	 */
	$scope.addMovie = function () {
		$scope.newMovie.rating = 0;
		moviesService.add($scope.newMovie);
		$scope.newMovie = {};
		$location.path( "/movies" );
	};
});
