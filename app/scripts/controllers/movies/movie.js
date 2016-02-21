mdb.controller("MovieController", function ($scope, $routeParams, moviesService) {
	$scope.movie = moviesService.get(Number($routeParams.movieId));
});
