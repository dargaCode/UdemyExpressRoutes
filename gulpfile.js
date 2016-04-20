
// DEPENDENCIES

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var jslinter = require('gulp-jshint');
var jsdisplay = require('jshint-stylish');
var rename = require('gulp-rename');
var merge = require('merge-stream');

// PATHS

var PATHS = {
  css: ['public/*.css'],
  html: ['public/*.html'],
  js: ['*.js'],
  dest: 'public/build'
}

// FACTORIES

var saveRenamed = lazypipe()
  .pipe(rename, {
    suffix: '.min'
  })
  .pipe(gulp.dest, PATHS.dest);

// TASKS

gulp.task('css', function() {
  return gulp.src(PATHS.css)
    .pipe(cssmin())
    .pipe(saveRenamed());
});

gulp.task('html', function() {
  return gulp.src(PATHS.html)
    .pipe(htmlmin({
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
