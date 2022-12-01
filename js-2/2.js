let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один із останніх фільмів, який ви дивились?', ''),
		b = prompt('На скільки ви оціните його?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		console.log('errrrr');
		i--;
	}
}

if (personalMovieDB.count == 0){
	console.log("Ви ще не дивились фільми =(");
} else if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
	console.log("Ви перегянули досить мало фільмів.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Ви звичайний глядач.");
} else if (personalMovieDB.count >= 30) {
	console.log("Ви кіноман.");
} else {
	console.log("Ви пиздабол =)");
}

console.log(personalMovieDB);
