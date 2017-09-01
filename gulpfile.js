let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('default', () => {
  return gulp.src('*.css')
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
  .pipe(gulp.dest('docs'));
});
