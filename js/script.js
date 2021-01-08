"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцените его по 10 бальной шкале?', '');
        
//     if (a != '' && a.length < 50 && a != null && b != '' && b != null) {
//         console.log('DONE');
//         personalMovieDB.movies[a] = b;      
//     } else {
//         console.log('ERROR!');
//         i--;        
//     }
// }

function showMyDB() {
    if (personalMovieDB.privat == true) {
        console.log(personalMovieDB.count);
    }
}

function writeYourGenres() {
    
    for (let i = 0; i <= 2; i++) {
        const a = prompt('ваш любимый жаныр под номером ' + i++ + ' ?', '');
        personalMovieDB.genres[i] = a;
    }

    console.log(personalMovieDB.genres);
}

// if (personalMovieDB.count < 10) {
//     alert ('Просмотрено довольно мало фильмов!');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     alert ('Вы классический зритель!');
// } else if (personalMovieDB.count > 30) {
//     alert ('Вы киноман!');
// } else {
//     alert ('Проихошла какая-то ошибка!');
// }


showMyDB();
writeYourGenres();
console.log(personalMovieDB);