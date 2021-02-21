"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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


function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert ('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert ('Вы киноман!');
    } else {
        alert ('Проихошла какая-то ошибка!');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();
