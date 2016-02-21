mdb.controller("MovieCastController", function ($scope, $routeParams, $location, moviesService, actorsService) {
	$scope.movie = moviesService.get(Number($routeParams.movieId));
	$scope.actors = actorsService.getAll();

	/**
	 * @description Checks if the given actor id is included in the list of actor ids of this movie.
	 * @param Number actorId the id of the actor we're checking.
	 */
	$scope.isMovieActor = function (actorId) {
		var found = false;
		for (var id of $scope.movie.actorIds) {
			if (id === actorId) {
				found = true;
				break;
			}
		}
		return found;
	};

	/**
	 * @description Updates the list of actor ids of this movie by adding or removing the given actor id, according to the value of the checkbox.
	 * @param Object $event the event object that will be used to capture the new value of the checkbox.
	 * @param Number actorId the id of the actor we're adding or removing.
	 */
	$scope.updateMovieActor = function ($event, actorId) {
		if ($event.currentTarget.checked) {
			moviesService.addActor($scope.movie, actorId);
			actorsService.addMovie(actorId, $scope.movie.id);
		} else {
			moviesService.removeActor($scope.movie, actorId);
			actorsService.removeMovie(actorId, $scope.movie.id);
		}
	};
});
