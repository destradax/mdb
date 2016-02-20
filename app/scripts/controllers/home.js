mdb.controller("HomeController", function ($scope) {
	$scope.search = function () {
		console.log("search: " + $scope.query);
	};
});
