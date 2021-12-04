import axios from "axios";
const movies = axios.get("http://localhost:3900/api/movies");

export function getMovies() {
	return movies;
}

export function getMovie(id) {
	return axios.get("http://localhost:3900/api/movies" + "/" + id);

	// return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
	// ** if movie exist in db
	if (movie._id) {
		const body = {...movie};
		// ** removing movie_id from movie body because we are passing it through url it's confusing to pass id in both url and body
		delete body._id;

		return axios.put("http://localhost:3900/api/movies" + "/" + movie._id, body);
	}

	// ** if movie doesn't exist we need to create one
	return axios.post("http://localhost:3900/api/movies", movie);
}

export function deleteMovie(id) {
	let movieInDb = movies.find((m) => m._id === id);
	movies.splice(movies.indexOf(movieInDb), 1);
	return movieInDb;
}
