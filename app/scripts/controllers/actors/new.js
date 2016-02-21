mdb.controller("NewActorController", function ($scope, $location, actorsService) {

	/**
	 * @description Saves the actor to the storage and redirects to the actor listing page.
	 */
	$scope.addActor = function () {
		actorsService.add($scope.newActor);
		$scope.newActor = {};
		$location.path( "/actors" );
	};
});
