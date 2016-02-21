mdb.controller("ActorController", function ($scope, $routeParams, actorsService) {
	$scope.actor = actorsService.get(Number($routeParams.actorId));
});
