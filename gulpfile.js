
// DEPENDENCIES

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

// PATHS

var PATHS = {
  css: ['public/*.css'],
  html: ['public/*.html'],
  dest: 'public/build'
}

// TASKS

gulp.task('css', function() {
  return gulp.src(PATHS.css)
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('html', function() {
  return gulp.src(PATHS.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('watch', function() {
  gulp.watch(PATHS.css, ['css']);
  gulp.watch(PATHS.html, ['html']);
});

gulp.task('default', ['css', 'html']);
