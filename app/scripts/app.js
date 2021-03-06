
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
	.when("/movies/search", {
		controller: "MoviesController",
		templateUrl: "views/movies/index.html"
	})
	.when("/movies/search/:query", {
		controller: "MoviesController",
		templateUrl: "views/movies/index.html"
	})
	.when("/movies/new", {
		controller: "NewMovieController",
		templateUrl: "views/movies/new.html"
	})
	.when("/movies/:movieId", {
		controller: "MovieController",
		templateUrl: "views/movies/view.html"
	})
	.when("/movies/:movieId/cast", {
		controller: "MovieCastController",
		templateUrl: "views/movies/cast.html"
	})
	.when("/actors", {
		controller: "ActorsController",
		templateUrl: "views/actors/index.html"
	})
	.when("/actors/new", {
		controller: "NewActorController",
		templateUrl: "views/actors/new.html"
	})
	.when("/actors/:actorId", {
		controller: "ActorController",
		templateUrl: "views/actors/view.html"
	})
	.otherwise({redirectTo: "/"});
});
