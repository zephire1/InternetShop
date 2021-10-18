const fileinclude = require('gulp-file-include');
const importCss = require('gulp-import-css');
const gulp = require('gulp');
const { src, dest } = require('gulp');

var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./styles/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function html() {
  src('./**.html')
    .pipe(fileinclude({
      prefix: '@@'
    }))
    .pipe(dest('build'))

  src('./css/*.css')
    .pipe(importCss())
    .pipe(dest('build/css'))

  src('./assets/**')
    .pipe(dest('build/assets'))

  src('./js/**')
    .pipe(dest('build/js'))
}

exports.html = html