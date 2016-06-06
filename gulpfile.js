'use strict';

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var notify = require('gulp-notify');

var paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js'
};

gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(notify('Successfully compiled Sass'))
        .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', function () {
    return gulp.watch(paths.scss, ['scss']);
});

function compile(isWatch) {
    var bundler = watchify(browserify(paths.js + '/app.js', { debug: true }))
        .transform(babelify);

    function rebundle() {
        bundler.bundle()
            .on('error', function (error) {
                console.error(error);
                this.emit('end');
            })
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./js'))
            .pipe(notify('Successfully compiled JS'))
    }

    if (isWatch) {
        bundler.on('update', function () {
            return rebundle();
        });
    }

    return rebundle();
}

gulp.task('js', function () {
    return compile();
});

gulp.task('js:watch', function () {
    return compile(true);
});

gulp.task('watch', ['scss:watch', 'js:watch']);

gulp.task('default', ['scss', 'js']);
