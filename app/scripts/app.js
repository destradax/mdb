
var mdb =  angular.module("mdb", ["ngRoute"]);

mdb.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.otherwise({redirectTo: "/"});
});
