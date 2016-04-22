var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  gulp.src('index.html')
  .pipe(inject(gulp.src([
    'bower_components/angular/*.min.js', 
    'bower_components/angular-ui-router/release/*.min.js', 
    'css/*.css',
    'bower_components/bootstrap/dist/css/*.min.css',
    'bower_components/angular-messages/*.min.js',
    'bower_components/angular-route/*.min.js',
    'bower_components/angular-bootstrap/*-tpls.min.js',
    'bower_components/angular-block-ui/dist/*.min.js',
    'bower_components/angular-block-ui/dist/*.min.css',
    'bower_components/jquery/dist/*.min.js',
    'app/app.module.js', 
    'app/app.config.js',
    'app/controllers/*.js',
    'app/**/*.js'
    ], {read: false}), {relative: true}))
  .pipe(gulp.dest(''));
});