"use strict";
mdb.service("moviesService", function () {

	/**
	 * @description Returns an array with fixture movies.
	 * @returns Array the array of sample movies
	 */
	this.getSampleMovies = function () {
		return [
			{id: 1, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/godfather2.png", rating: 89, releaseYear: 1974, title: "The Godfather II"},
			{id: 2, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/savingprivateryan.png", rating: 64, releaseYear: 1998, title: "Saving Private Ryan"},
			{id: 3, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/butterflyeffect.png", rating: 43, releaseYear: 2004, title: "The Butterfly Effect"},
			{id: 4, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/fightclub.png", rating: 21, releaseYear: 1999, title: "Fight Club"},
			{id: 5, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/godfather1.png", rating: 21, releaseYear: 1972, title: "The Godfather"},
			{id: 6, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/bettercallsaul.png", rating: 19, releaseYear: 2105, title: "Better Call Saul"},
			{id: 7, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/streetfighter.png", rating: 17, releaseYear: 2016, title: "Street Fighter V"},
			{id: 8, actors: [], director: 1, excerpt: "James Franco start in this new series as an adaptation of the King's time travel glorious story.", genres: [], grossIncome: 999, imgUrl: "img/blackadder.png", rating: 5, releaseYear: 1982, title: "Black Adder"}
		];
	};

	/**
	 * @description Returns an array with all the movies. If none are found, the sample movies are instantiated, saved to the storage and returned.
	 * @returns Array the array of all the currently saved movies.
	 */
	this.getAll = function () {
		var movies = [];

		for (var key in localStorage){
			if (/^mdb:movies:/.test(key)) {
				movies.push(JSON.parse(localStorage.getItem(key)));
			}
		}

		if (movies.length === 0) {
			movies = this.getSampleMovies();
			for (var movie of movies) {
				this.save(movie);
			}
		}

		return movies;
	};

	/**
	 * @description Saves the given movie to the storage.
	 * @param Object movie the movie to be saved.
	 */
	this.save = function (movie) {
		localStorage.setItem("mdb:movies:" + movie.id, JSON.stringify(movie));
	};

	/**
	 * @description Finds and returns the movie whose equals to the one given.
	 * @param Number movieId the id of the movie we're searching for.
	 * @returns Object the movie object or null if no movie is found with the given id.
	 */
	this.get = function (movieId) {
		return JSON.parse(localStorage.getItem("mdb:movies:" + movieId));
	};
});
