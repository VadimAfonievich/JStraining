"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его по 10 бальной шкале?', '');
                
            if (a != '' && a.length < 50 && a != null && b != '' && b != null) {
                console.log('DONE');
                personalMovieDB.movies[a] = b;      
            } else {
                console.log('ERROR!');
                i--;        
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert ('Вы киноман!');
        } else {
            alert ('Произошла какая-то ошибка!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLocaleLowerCase();

            if(genre === "" || genre == null) {
                console.log("Вы ввели некорректные данные или оставили поле пустым!");
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);

        });
    }
};