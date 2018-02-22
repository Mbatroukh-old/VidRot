// Config
var gulp = require('gulp');
// CSS
var sass = require('gulp-sass');
// JS


gulp.task('sass', function(){
  return gulp.src('src/scss/vidRot.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Other watchers
})