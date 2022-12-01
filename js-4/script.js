const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один із останніх фільмів, який ви дивились?', ''),
				b = prompt('На скільки ви оціните його?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				console.log('Error!');
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
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
	},
	showMyDB: function() {
		if (personalMovieDB.privat == true) {
			console.log("Немає доступу.")
		} else {
			console.log("Доступ надано.\n" + personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
			if (genre == '' || genre == null){
				console.log('Введіть коректні данні.');
				i--;
			} else {
				personalMovieDB.genres[i-1] = genre;
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Улюблений жанр ${i + 1} - це ${item}`);
		});
	}
};
