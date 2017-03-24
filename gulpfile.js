var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  babel = require('babel-register');

gulp.task('test', function () {
  return gulp.src(['js/test/*.js'])
    .pipe(mocha({
      compilers:babel
  }));
});

gulp.task('tdd', function() {
  return gulp.watch(['js/app/*.js','js/test/*.js'], ['test']);
});

gulp.task('tdd-single', function() {
  return gulp.watch('js/test/*.js')
    .on('change', function(file) {
      gulp.src(file.path)
        .pipe(mocha({
          compilers: babel
        }))
    });
});