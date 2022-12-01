let numberOfFilms = prompt("Скільки фільмів ви вже подивились?", '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один із останніх фільмів, який ви дивились?', ''),
	b = prompt('На скільки ви оціните його?', ''),
	c = prompt('Один із останніх фільмів, який ви дивились?', ''),
	d = prompt('На скільки ви оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
