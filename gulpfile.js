let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let inlinesource = require('gulp-inline-source');

gulp.task('default', () => {
  return gulp.src(['/node_modules/normalize.css/normalize.css','*.css'])
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
  .pipe(gulp.dest('dist'))
  .pipe(gulp.dest('docs'));
});

gulp.task('inlinesource', () => {
  return gulp.src('index.html')
  .pipe(inlinesource())
  .pipe(gulp.dest('docs'));
});


