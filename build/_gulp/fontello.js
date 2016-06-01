//fontello
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file fontello
 * @description
 *
 */
gulp.task('fontello', function() {
    return gulp.src('./app/fontello.config.json')
        .pipe(fontello())
        .pipe(print())
        .pipe(gulp.dest('./build/'));
});