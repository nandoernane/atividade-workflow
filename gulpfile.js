var gulp = require("gulp");

gulp.task('move-base', function(){
	return gulp.src('./source/scss/base.scss')
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('move-style', function(){
	return gulp.src('./source/scss/style.scss')
	.pipe(gulp.dest('./dist/css/'))
});

gulp.task('move-layout', function(){
	return gulp.src('./source/scss/layout.scss')
	.pipe(gulp.dest('./dist/css/'))
});

gulp.task('move-index', function(){
	return gulp.src('./source/index.html')
	.pipe(gulp.dest('./dist/'))
});

gulp.task('listening', function(){
	gulp.watch('./source/scss/base.scss',['move-base']);
	gulp.watch('./source/scss/layout.scss',['move-layout']);
	gulp.watch('./source/scss/style.scss',['move-style']);
	gulp.watch('./source/index.html',['move-index']);
});