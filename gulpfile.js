var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('pack-js', function () {    
    return gulp.src(['./build/static/js/*.js'])
        .pipe(concat('test.js'))
        .pipe(gulp.dest('dist/js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src(['./build/static/css/*.css'])
        .pipe(concat('test.css'))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('default', gulp.series('pack-js', 'pack-css'));