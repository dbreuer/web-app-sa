//css
/**
 * Created by David Breuer on 01/06/2016.
 *
 * @file css
 * @description
 *
 */
// Compile CSS from SCSS files

module.exports = function() {
  return this.gulp
    .src(this.opts.sassFiles)
    .pipe(this.opts.plugins.debug({title: 'css:'}))
    .pipe(this.opts.plugins.sourcemaps.write('.map'))
    .pipe(this.opts.plugins.concat('build.css'))
    //     .pipe(rename({suffix: '.min'}))
    .pipe(this.opts.plugins.sass({
      outputStyle: 'compressed'
    }).on('error', this.opts.plugins.sass.logError))
    .pipe(this.gulp.dest(this.opts.dest + 'css'));
};