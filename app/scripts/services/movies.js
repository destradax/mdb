"use strict";
mdb.service("moviesService", function () {

	/**
	 * @description Returns an array with fixture movies.
	 * @returns Array the array of sample movies
	 */
	this.getSampleMovies = function () {
		return [
			{id: 1, title: "The Godfather", director: "Francis Ford Coppola", actorIds: [1,2], genres: [], grossIncome: 999, imgUrl: "img/godfather1.png", rating: 21, releaseYear: 1972, excerpt: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."},
			{id: 2, title: "The Godfather II", director: "Francis Ford Coppola", actorIds: [2,3], genres: [], grossIncome: 999, imgUrl: "img/godfather2.png", rating: 89, releaseYear: 1974, excerpt: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba."},
			{id: 3, title: "Saving Private Ryan", director: "Steven Spielberg", actorIds: [4], genres: [], grossIncome: 999, imgUrl: "img/savingprivateryan.png", rating: 64, releaseYear: 1998, excerpt: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."},
			{id: 4, title: "The Butterfly Effect", director: "Eric Bress", actorIds: [5], genres: [], grossIncome: 999, imgUrl: "img/butterflyeffect.png", rating: 43, releaseYear: 2004, excerpt: "A young man blocks out harmful memories of significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life."},
			{id: 5, title: "Fight Club", director: "David Fincher", actorIds: [6], genres: [], grossIncome: 999, imgUrl: "img/fightclub.png", rating: 21, releaseYear: 1999, excerpt: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more..."},
			{id: 6, title: "Better Call Saul", director: "Adam Bernstein", actorIds: [7], genres: [], grossIncome: 999, imgUrl: "img/bettercallsaul.png", rating: 19, releaseYear: 2015, excerpt: "The trials and tribulations of criminal lawyer, Saul Goodman, in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico."},
			{id: 7, title: "Street Fighter", director: "Steven E. de Souza", actorIds: [8], genres: [], grossIncome: 999, imgUrl: "img/streetfighter.png", rating: 17, releaseYear: 2016, excerpt: "Col. Guile and various other martial arts heroes fight against the tyranny of Dictator M. Bison and his cohorts."},
			{id: 8, title: "Black Adder", director: "Martin Shardlow", actorIds: [9], genres: [], grossIncome: 999, imgUrl: "img/blackadder.png", rating: 5, releaseYear: 1982, excerpt: "In the Middle Ages, Prince Edmund the Black Adder constantly schemes and endeavors to seize the crown from his father and brother."}
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

	/**
	 * @description Updates the given movie in the storage, merging the properties of the passed movie with the ones in the storage.
	 * @param Object updatedMovie the movie with the updated properties.
	 */
	this.update = function (updatedMovie) {
		var movie = this.get(updatedMovie.id) || {};
		angular.extend(movie, updatedMovie);

		this.save(movie);
	};

	/**
	 * @description Assigns the id property to the given movie and saves it to the storage.
	 * @param Object newMovie the movie object that will be saved.
	 */
	this.add = function (newMovie) {
		var movies = this.getAll();

		newMovie.id =  movies[movies.length - 1].id + 1;
		newMovie.actorIds = [];

		this.save(newMovie);
	};

	/**
	 * @description Adds an actor to the movie.
	 * @param Object movie the movie which the actor will be added to.
	 * @param Number actorId the id of the actor that will be added to the movie.
	 */
	this.addActor = function (movie, actorId) {
		movie.actorIds.push(actorId);
		this.update(movie);
	};

	/**
	 * @description Removes an actor from the movie.
	 * @param Object movie the movie which the actor will be removed from.
	 * @param Number actorId the id of the actor that will be removed from the movie.
	 */
	this.removeActor = function (movie, actorId) {
		for (var i = 0; i < movie.actorIds.length; i++) {
			if (movie.actorIds[i] === actorId) {
				movie.actorIds.splice(i,1);
				this.update(movie);
				break;
			}
		}
	};

	/**
	 * @description removes the given movie from the storage.
	 * @param Object movie the movie that will be removed.
	 */
	this.delete = function (movie) {
		localStorage.removeItem("mdb:movies:" + movie.id);
	};

	/**
	 * @description Removes an actor from all the movies.
	 * @param Number actorId the id of the actor that will be removed.
	 */
	this.removeActorFromAllMovies = function (actorId) {
		// Find all the movies that contain the given actor.
		var movies = this.getAll().filter(function (movie) {
			return movie.actorIds.indexOf(actorId) !== -1;
		});
		for (var movie of movies) {
			this.removeActor(movie, actorId);
		}
	};
});
