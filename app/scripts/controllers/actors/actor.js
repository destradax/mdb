mdb.controller("ActorController", function ($scope, $routeParams, actorsService, $location) {
	$scope.actor = actorsService.get(Number($routeParams.actorId));

	/**
	 * @description Updates the current properties of the actor in the storage and redirects to the actor listing page.
	 */
	$scope.updateActor = function () {
		actorsService.update($scope.actor);
		$location.path( "/actors" );
	};
});
