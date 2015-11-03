// import gulp
var gulp = require("gulp")
var gulpTypescript = require("gulp-typescript");
var pr = require("pushrocks");

pr.beautylog.info("Now compiling TypeScript");
gulp.task('compileTS', function() {
	var stream = gulp.src('../index.ts')
	  .pipe(gulpTypescript({
	  	out: "index.js"
	  }))
	  .pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('default',['compileTS'], function() {
	pr.beautylog.success('Typescript compiled');
});
gulp.start.apply(gulp, ['default']);