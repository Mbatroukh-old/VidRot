// Config
var gulp = require('gulp');
var concat = require('gulp-concat');

// CSS
var sass = require('gulp-sass');
// JS


gulp.task('sass', function(){
  return gulp.src('src/scss/vidRot.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('concat', function(){
  return gulp.src(['src/js/jquery.js', 'src/js/roundSlider.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('moving', function(){
	gulp.src(['src/instructions.html', 'src/instructions.js', 'src/manifest.json'])
      .pipe(gulp.dest('dist'));
	gulp.src("src/i/*.png")
      .pipe(gulp.dest('dist'));
  gulp.src("src/js/vidRot.js")
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['moving']);
  // Other watchers
})