mdb.controller("ActorsController", function ($scope, $location, actorsService) {
	$scope.actors = actorsService.getAll();

	/**
	 * @description Redirects to the page of the actor with the given id.
	 * @param Number actorId the id of the actor
	 */
	$scope.showActor = function (actorId) {
		$location.path( "/actors/" + actorId );
	};
});
