mdb.controller("ActorController", function ($scope, $routeParams, actorsService, moviesService, $location) {
	$scope.actor = actorsService.get(Number($routeParams.actorId));

	/**
	 * @description Updates the current properties of the actor in the storage and redirects to the actor listing page.
	 */
	$scope.updateActor = function () {
		actorsService.update($scope.actor);
		$location.path( "/actors" );
	};

	/**
	 * @description Retrieves the information for each of the movie ids associated to this actor.
	 */
	var fetchActorMovies = function () {
		$scope.actor.movies = [];
		for (var movieId of $scope.actor.movieIds) {
			$scope.actor.movies.push(moviesService.get(movieId));
		}
	};
	fetchActorMovies();
});
