"use strict";
mdb.service("actorsService", function () {

	/**
	 * @description Returns an array with fixture actors.
	 * @returns Array the array of sample actors
	 */
	this.getSampleActors = function () {
		return [
			{id: 1, firstName: "Tim", lastName: "Robbins", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_UY317_CR16,0,214,317_AL_.jpg"},
			{id: 2, firstName: "Morgan", lastName: "Freeman", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 3, firstName: "Marlon", lastName: "Brando", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR97,0,214,317_AL_.jpg"},
			{id: 4, firstName: "Al", lastName: "Pacino", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 5, firstName: "Robert", lastName: "De Niro", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg"},
			{id: 6, firstName: "Christian", lastName: "Bale", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UX214_CR0,0,214,317_AL_.jpg"},
			{id: 7, firstName: "John", lastName: "Travolta", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_UY317_CR11,0,214,317_AL_.jpg"},
			{id: 8, firstName: "Samuel L.", lastName: "Jackson", birthDate: new Date(), movieIds: [], imgUrl: "http://ia.media-imdb.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg"}
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
});
