mdb.controller("MovieController", function ($scope, $routeParams, moviesService, actorsService, $location) {
	$scope.movie = moviesService.get(Number($routeParams.movieId));

	$scope.ratingOptions = [10,20,30,40,50,60,70,80,90,100].reverse();
	$scope.disableRating = false;

	/**
	 * @description Updates the current properties of the movie in the storage and redirects to the movie listing page.
	 */
	$scope.updateMovie = function () {
		moviesService.update($scope.movie);
		$location.path("/movies");
	};

	/**
	 * @description Updates this movie's average rating with the user rating. Disables the rating select box to allow only one rating per visit.
	 */
	$scope.rateMovie = function () {
		$scope.movie.rating = ($scope.movie.rating + Number($scope.userRating)) / 2;
		moviesService.update($scope.movie);
		$scope.disableRating = true;
	};

	/**
	 * @description Retrieves the information for each of the actor ids associated to this movie.
	 */
	var fetchMovieActors = function () {
		$scope.movie.actors = [];
		for (var actorId of $scope.movie.actorIds) {
			$scope.movie.actors.push(actorsService.get(actorId));
		}
	};
	fetchMovieActors();

	/**
	 * @description Deletes the current movie from the storage and redirects to the movie listing page.
	 */
	$scope.deleteMovie = function () {
		actorsService.removeMovieFromAllActors($scope.movie.id);
		moviesService.delete($scope.movie);
		$location.path("/movies");
	};
});
