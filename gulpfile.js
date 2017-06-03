var gulp = require('gulp');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var dependencies = ['react', 'react-dom', 'react-router'];

gulp.task('browserify', () => { 
	return browserify(
		{ entries: 'main.js' })
		.external(dependencies)
	    .transform(babelify, { presets: ['es2015', 'react'] })
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe(gulp.dest('public/js'));
});
