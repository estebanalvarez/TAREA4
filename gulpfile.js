var gulp = require('gulp');
var zip = require('gulp-zip');

/**
 * GULP task comprime el codigo a .zip
 * nombre del archivo code.zip
 * destino del archivo /code
 */
gulp.task('zip_code', function() {
    return gulp.src('./**')
        .pipe(zip('code.zip'))
        .pipe(gulp.dest('./code'));
});