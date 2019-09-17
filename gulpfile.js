var gulp 	= require('gulp'),
  	sass 	= require('gulp-sass'),
  	concat 	= require('gulp-concat'),
  	rename 	= require('gulp-rename'),
  	cleanCSS= require('gulp-clean-css');

function styles() {
  return gulp
  	.src('sass/**/*.scss', {
      sourcemaps: true
    })
  .pipe(sass())
  .pipe(rename({
    basename: 'main',
    suffix: ''
  }))
.pipe(cleanCSS({debug: true}))
.pipe(concat('style.css'))
.pipe(gulp.dest('.'));
}

function watch() {
  gulp.watch('sass/**/*.scss', styles);
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);