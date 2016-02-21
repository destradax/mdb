mdb.controller("NewMovieController", function ($scope, $location, moviesService) {

	/**
	 * @description Saves the movie to the storage and redirects to the movie listing page.
	 */
	$scope.addMovie = function () {
		moviesService.add($scope.newMovie);
		$scope.newMovie = {};
		$location.path( "/movies" );
	};
});
