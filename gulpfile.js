/***
 *
 * AAT GulpJS file v.0.1
 *
 * @author : Mark Rushton <mark@modernfidelity.co.uk>
 *
 * @type {*|exports|module.exports}
 *
 */


var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gzip = require('gulp-gzip'),
    minifyHTML = require('gulp-minify-html'),
    sourcemaps = require('gulp-sourcemaps');

// WATCH
gulp.task('watch', function() {

    gulp.watch([
            './app/sass/**/*.scss',
            './app/site/shared/directives/**/*.scss'
        ],
        ['sass']
    );
    gulp.watch(['./app/site/components/**/*.js', './app/app.js'], ['js']);
    gulp.watch(['./app/site/shared/**/*.js', './app/app.js'], ['js']);
    gulp.watch(['./app/site/**/*.html'], ['html']);

});


// CSS & SASS
gulp.task('sass', function() {
    gulp.src([
            './app/sass/app.scss'
            //'./app/sass/**/**/*.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        //.pipe(minifyCSS())
        .pipe(sourcemaps.write('source-maps'))
        .pipe(rename('build.css'))
        .pipe(gulp.dest('./app/css/'));
});

// JAVASCRIPT
gulp.task('js', function() {

    return gulp.src([

            // VENDOR
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-jwt/dist/angular-jwt.js',
            'app/bower_components/a0-angular-storage/dist/angular-storage.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            //'app/bower_components/slick-carousel/slick/slick.js',
            //'app/bower_components/angular-slick/dist/slick.js',

            // SHARED
            'app/site/shared/shared.js',

            //'app/site/shared/directives/component/component.js',
            //
            //'app/site/shared/directives/mobile-menu/mobile-menu.js',
            //'app/site/shared/directives/search-bar/search-bar.js',
            //'app/site/shared/meta/meta.js',
            //
            //'app/site/shared/directives/menu/menu.js',
            //'app/site/shared/directives/landing-page/landing-page.js',
            //
            //'app/site/shared/directives/hero/hero.js',
            //'app/site/shared/directives/steps/steps.js',
            //'app/site/shared/directives/campaign-cta/campaign-cta.js',
            //'app/site/shared/directives/secondary-cta/secondary-cta.js',
            //'app/site/shared/directives/html/html.js',
            //'app/site/shared/directives/social/social.js',
            //'app/site/shared/directives/image/image.js',
            //'app/site/shared/directives/module/module.js',
            //'app/site/shared/directives/slideshow/slideshow.js',
            //'app/site/shared/directives/spotlights/spotlights.js',
            //'app/site/shared/directives/title/title.js',
            //
            //'app/site/shared/directives/404/404.js',

            // CUSTOM
            'app/site/components/frontpage/frontpage.js',
            //'app/site/components/bookmarks/bookmarks.js',
            //'app/site/components/auth/auth.js',
            //'app/site/api/api.js',
            //
            //'app/site/components/news/news.js',
            //'app/site/components/maintenance/maintenance.js',
            //'app/site/components/about/about.js',
            //'app/site/components/dashboard/dashboard.js',
            //'app/site/components/contact/contact.js',
            //'app/site/components/login/login.js',
            //'app/site/components/user/user.js',

            // MAIN
            'app/app.js'

        ])
        .pipe(sourcemaps.write('.map'))
        .pipe(concat('build.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./app/'));

});

// HTML
gulp.task('html', function() {

    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('./app/index.html')
        .pipe(minifyHTML(opts))
        .pipe(rename('build.html'))
        .pipe(gulp.dest('./app/'));
});


// Default
gulp.task('default', ['sass', 'js', 'html', 'watch']);