var gulp = require("gulp");
var watch = require('gulp-watch');

gulp.task('default', function(){

	console.log("Hooray you have creadted a  gulp task ");

});

gulp.task('html', function(){

	console.log("Imagine something useful being done here");

});

gulp.task('styles', function(){

	console.log("imagine sass running here");

});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html')
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});