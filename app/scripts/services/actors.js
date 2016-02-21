"use strict";
mdb.service("actorsService", function () {

	/**
	 * @description Returns an array with fixture actors.
	 * @returns Array the array of sample actors
	 */
	this.getSampleActors = function () {
		return [
			{id: 1, firstName: "Marlon", lastName: "Brando", birthDate: new Date(1924,3,3), movieIds: [1], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR97,0,214,317_AL_.jpg"},
			{id: 2, firstName: "Al", lastName: "Pacino", birthDate: new Date(1940,3,25), movieIds: [1,2], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 3, firstName: "Robert", lastName: "De Niro", birthDate: new Date(1943,7,17), movieIds: [2], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg"},
			{id: 4, firstName: "Tom", lastName: "Hanks", birthDate: new Date(1956,6,9), movieIds: [3], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"},
			{id: 5, firstName: "Ashton", lastName: "Kutcher", birthDate: new Date(1978,1,7), movieIds: [4], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTM5Mjc2MzMzMl5BMl5BanBnXkFtZTcwOTA5OTIxNw@@._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 6, firstName: "Brad", lastName: "Pitt", birthDate: new Date(1963,11,18), movieIds: [5], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 7, firstName: "Bob", lastName: "Odenkirk", birthDate: new Date(1962,9,22), movieIds: [6], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMjA1Njg1NzI1Ml5BMl5BanBnXkFtZTcwNTE5ODk1OA@@._V1_UY317_CR67,0,214,317_AL_.jpg"},
			{id: 8, firstName: "Jean-Claude", lastName: "Van Damme", birthDate: new Date(1960,9,18), movieIds: [7], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTA2OTE1Njg4NjVeQTJeQWpwZ15BbWU3MDAyNjU4MDM@._V1_UY317_CR22,0,214,317_AL_.jpg"},
			{id: 9, firstName: "Rowan", lastName: "Atkinson", birthDate: new Date(1955,0,6), movieIds: [8], gender: "M", imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTg3NDUzOTc3MV5BMl5BanBnXkFtZTcwNjcxMDkxNw@@._V1_UY317_CR0,0,214,317_AL_.jpg"}
		];
	};

	/**
	 * @description Returns an array with all the actors. If none are found, the sample actors are instantiated, saved to the storage and returned.
	 * @returns Array the array of all the currently saved actors.
	 */
	this.getAll = function () {
		var actors = [];

		for (var key in localStorage){
			if (/^mdb:actors:/.test(key)) {
				actors.push(JSON.parse(localStorage.getItem(key)));
			}
		}

		if (actors.length === 0) {
			actors = this.getSampleActors();
			for (var actor of actors) {
				this.save(actor);
			}
		}

		return actors;
	};

	/**
	 * @description Saves the given actor to the storage.
	 * @param Object actor the actor to be saved.
	 */
	this.save = function (actor) {
		localStorage.setItem("mdb:actors:" + actor.id, JSON.stringify(actor));
	};

	/**
	 * @description Finds and returns the actor whose equals to the one given.
	 * @param Number actorId the id of the actor we're searching for.
	 * @returns Object the actor object or null if no actor is found with the given id.
	 */
	this.get = function (actorId) {
		var actor = JSON.parse(localStorage.getItem("mdb:actors:" + actorId));
		actor.birthDate = new Date(actor.birthDate);
		return actor;
	};

	/**
	 * @description Updates the given actor in the storage, merging the properties of the passed actor with the ones in the storage.
	 * @param Object updatedActor the actor with the updated properties.
	 */
	this.update = function (updatedActor) {
		var actor = this.get(updatedActor.id) || {};
		angular.extend(actor, updatedActor);

		this.save(actor);
	};

	/**
	 * @description Assigns the id property to the given actor and saves it to the storage.
	 * @param Object newActor the actor object that will be saved.
	 */
	this.add = function (newActor) {
		var actors = this.getAll();

		newActor.id =  actors[actors.length - 1].id + 1;
		newActor.movieIds = [];

		this.save(newActor);
	};

	/**
	 * @description Adds a movie to the actor's filmography.
	 * @param Number actorId the id of the actor where the movie will be added.
	 * @param Number movieId the id of the movie that will be added to the actor.
	 */
	this.addMovie = function (actorId, movieId) {
		var actor = this.get(actorId);
		actor.movieIds.push(movieId);
		this.update(actor);
	};

	/**
	 * @description Removes a movie from the actor's filmography.
	 * @param Number actorId the id of the actor the movie will be removed from.
	 * @param Number movieId the id of the movie that will be removed from the actor.
	 */
	this.removeMovie = function (actorId, movieId) {
		var actor = this.get(actorId);
		for (var i = 0; i < actor.movieIds.length; i++) {
			if (actor.movieIds[i] === movieId) {
				actor.movieIds.splice(i,1);
				this.update(actor);
				break;
			}
		}
	};

	/**
	 * @description Removes an movie from all the actors.
	 * @param Number movieId the id of the movie that will be removed.
	 */
	this.removeMovieFromAllActors = function (movieId) {
		// Find all the actors that participated in the given movie.
		var actors = this.getAll().filter(function (actor) {
			return actor.movieIds.indexOf(movieId) !== -1;
		});
		for (var actor of actors) {
			this.removeMovie(actor.id, movieId);
		}
	};

	/**
	 * @description removes the given actor from the storage.
	 * @param Object actor the actor that will be removed.
	 */
	this.delete = function (actor) {
		localStorage.removeItem("mdb:actors:" + actor.id);
	};

	/**
	 * @description Deletes all the movies and recreates the fixtures.
	 */
	this.reset = function () {
		for (var key in localStorage){
			if (/^mdb:actors:/.test(key)) {
				localStorage.removeItem(key);
			}
		}
		this.getAll();
	};
});
