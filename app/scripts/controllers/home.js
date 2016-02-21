mdb.controller("HomeController", function ($scope) {
	$scope.movies = [
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/godfather2.png",
			rating: 89,
			releaseYear: 1974,
			title: "The Godfather II"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/savingprivateryan.png",
			rating: 64,
			releaseYear: 1998,
			title: "Saving Private Ryan"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/butterflyeffect.png",
			rating: 43,
			releaseYear: 2004,
			title: "The Butterfly Effect"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/fightclub.png",
			rating: 21,
			releaseYear: 1999,
			title: "Fight Club"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/godfather1.png",
			rating: 21,
			releaseYear: 1972,
			title: "The Godfather"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/bettercallsaul.png",
			rating: 19,
			releaseYear: 2105,
			title: "Better Call Saul"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/streetfighter.png",
			rating: 17,
			releaseYear: 2016,
			title: "Street Fighter V"
		},
		{
			actors: [],
			director: 1,
			excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
			genres: [],
			grossIncome: 999,
			imgUrl: "img/blackadder.png",
			rating: 5,
			releaseYear: 1982,
			title: "Black Adder"
		}
	];

	$scope.search = function () {
		console.log("search: " + $scope.query);
	};
});
