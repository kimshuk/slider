var gulp = require("gulp"),
  sass = require("gulp-sass"),
  useref = require("gulp-useref"),
  cssnano = require("gulp-cssnano"),
  gulpif = require("gulp-if"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));
});

gulp.task("useref", function() {
  return (
    gulp
      .src("app/*.html")
      .pipe(useref())
      // .pipe(gulpif("*.js", uglify()))
      .pipe(gulpif("*.css", cssnano()))
      .pipe(gulp.dest("dist"))
  );
});

gulp.task("scripts", function() {
  return (
    gulp
      .src("app/js/**/*.js")
      .pipe(
        babel({
          presets: ["es2015"]
        })
      )
      // .pipe(rename({ suffix: ".min" }))
      // .pipe(uglify())
      .pipe(gulp.dest("dist"))
  );
});

// gulp.task("clean", function(cb) {
//   del(["dist"], cb);
// });

gulp.task("watch:files", function() {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["scripts"]);
  gulp.watch("app/*.html", ["useref"]);
  //   gulp.watch("app/*.html", ["clean"]);
});

gulp.task("default", ["watch:files", "useref"]);
