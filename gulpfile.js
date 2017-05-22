var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task('move-style', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('./dist/css/'))
});



gulp.task('move-index', function(){
	return gulp.src('./source/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist/'))
});

gulp.task('listening', function(){
	gulp.watch('./source/scss/*.scss',['move-style']);
	gulp.watch('./source/index.html',['move-index']);
});