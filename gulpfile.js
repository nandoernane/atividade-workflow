var gulp = require("gulp");

gulp.task('move-style', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(gulp.dest('./dist/css/'))
});



gulp.task('move-index', function(){
	return gulp.src('./source/index.html')
	.pipe(gulp.dest('./dist/'))
});

gulp.task('listening', function(){
	gulp.watch('./source/scss/*.scss',['move-style']);
	gulp.watch('./source/index.html',['move-index']);
});