
var mdb =  angular.module("mdb", ["ngRoute"]);

mdb.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when("/movies", {
		controller: "MoviesController",
		templateUrl: "views/movies/index.html"
	})
	.when("/movies/:movieId", {
		controller: "MovieController",
		templateUrl: "views/movies/view.html"
	})
	.when("/actors", {
		controller: "ActorsController",
		templateUrl: "views/actors/index.html"
	})
	.otherwise({redirectTo: "/"});
});
