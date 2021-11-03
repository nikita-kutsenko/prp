'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
  return gulp.src('./sass/index.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.build = build;
gulp.task("watch", function() {
  gulp.watch('./sass/**/*.scss', gulp.parallel(build));
});