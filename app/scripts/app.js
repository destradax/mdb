
var mdb =  angular.module("mdb", ["ngRoute"]);

mdb.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when("/movies/:movieId", {
		controller: "MovieController",
		templateUrl: "views/movies/view.html"
	})
	.otherwise({redirectTo: "/"});
});
