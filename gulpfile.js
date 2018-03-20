var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    server:{
      baseDir:"app"
    }
  });

  watch('./app/index.html',function(){
    browserSync.reload();
  });

  watch('./app/styles.css',function(){
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', function(){
  return gulp.src('./app/styles.css')
  .pipe(browserSync.stream());
});
