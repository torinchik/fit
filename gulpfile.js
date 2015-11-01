/**
 * Created by Torin on 01.11.2015.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));

});