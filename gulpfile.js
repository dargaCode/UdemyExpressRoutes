
// DEPENDENCIES

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var csslinter = require('gulp-csslint');
var cssminify = require('gulp-cssmin');
var htmllinter = require('gulp-htmlhint');
var htmlminify = require('gulp-htmlmin');
var jslinter = require('gulp-jshint');
var jsdisplay = require('jshint-stylish');
var rename = require('gulp-rename');

// PATHS

var PATHS = {
  css: ['public/*.css'],
  html: ['public/*.html'],
  js: ['*.js'],
  dest: 'public/build'
};

// FACTORIES

var saveRenamed = lazypipe()
  .pipe(rename, {
    suffix: '.min'
  })
  .pipe(gulp.dest, PATHS.dest);

// TASKS

gulp.task('css', function() {
  return gulp.src(PATHS.css)
    .pipe(csslinter())
    .pipe(csslinter.reporter())
    .pipe(cssminify())
    .pipe(saveRenamed());
});

gulp.task('html', function() {
  return gulp.src(PATHS.html)
    .pipe(htmllinter())
    .pipe(htmllinter.failReporter())
    .pipe(htmlminify({
      collapseWhitespace: true
    }))
    .pipe(saveRenamed());
});

gulp.task('js', function() {
  return gulp.src(PATHS.js)
    .pipe(jslinter())
    .pipe(jslinter.reporter(jsdisplay));
});

gulp.task('watch', function() {
  gulp.watch(PATHS.css, ['css']);
  gulp.watch(PATHS.html, ['html']);
  gulp.watch(PATHS.js, ['js']);
});

gulp.task('default', ['css', 'html', 'js']);
