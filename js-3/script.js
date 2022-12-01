let numberOfFilms;

function start () {
	numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms () {
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
}

rememberMyFilms();

function detectPersonalLevel (){
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
}

detectPersonalLevel();

function showMyDB (){
	if (personalMovieDB.privat == true) {
		console.log("Немає доступу.")
	} else {
		console.log("Доступ надано.")
		console.log(personalMovieDB);
	}
}

showMyDB()

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`);
	}
}
writeYourGenres();
