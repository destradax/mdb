mdb.controller("NavbarController", function ($scope, $location) {
	$scope.menus = [
		{
			url: "/movies",
			label: "Movies",
			icon: "glyphicon-facetime-video"
		},
		{
			url: "/actors",
			label: "Actors",
			icon: "glyphicon-user"
		}
	];

	/**
	 * @description Checks if the current path starts with the URL of the given menu.
	 * @param Menu menu The menu object.
	 * @returns Boolean true if the current path starts with the URL of the given menu, false otherwise.
	 */
	$scope.isActive = function (menu) {
		return $location.path().indexOf(menu.url) === 0;
	};

});
