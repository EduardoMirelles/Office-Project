
const { src, dest, watch, parallel } = require('gulp');

//Compilar CSS
const sass = require('gulp-sass')(require('sass'));

//Imagenes
const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css (done) {

    src('src/sass/app.scss') //Identificar el archivo de SASS
        .pipe( sass() ) //Compilar SASS
        .pipe( dest('build/css') )//Exportarlo o guardarlo en una ubicación

    done();
};

function imagenes(done) {

    const opciones = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{jpg,jpeg,svg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function versionWebp(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg,jpeg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
    done();
}

function dev(done) {
    watch('src/sass/**/*.scss', css);
    done();
}



exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, css, dev);