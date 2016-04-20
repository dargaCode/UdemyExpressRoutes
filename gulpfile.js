
// DEPENDENCIES

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var merge = require('merge-stream');

// PATHS

var PATHS = {
  css: ['public/*.css'],
  html: ['public/*.html'],
  dest: 'public/build'
}

// TASKS

var saveRenamed = lazypipe()
  .pipe(rename, {
    suffix: '.min'
  })
  .pipe(gulp.dest, PATHS.dest);

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

gulp.task('watch', function() {
  gulp.watch(PATHS.css, ['css']);
  gulp.watch(PATHS.html, ['html']);
});

gulp.task('default', ['css', 'html']);
