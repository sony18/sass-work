const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
 
// minify js es compatible
gulp.task('minifyjs', async function(){
  return gulp.src('src/js/*.js')
    .pipe(terser().on('error', console.error))
    .pipe(gulp.dest('dist/js'));
})

 
// imagemin
gulp.task('images', async function(){  
    gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
});

// htmlclean 
gulp.task('cleanhtml', async function() {
  return gulp.src('src/*.html')
    .pipe(htmlclean({
        protect: /<\!--%fooTemplate\b.*?%-->/g,
        edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
      }))
    .pipe(gulp.dest('./dist/'));
});


// compile scss
gulp.task('scss', async function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

// minify css
gulp.task('css', async function () {
    gulp.src('src/css/*.css')
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});



//Production purpose minifications
gulp.task('build', gulp.series('scss', 'css','cleanhtml', 'images','minifyjs'))

// For testing
// gulp.task('build', gulp.series('minifyjs'))

gulp.task('run', gulp.series('scss'))

// WATCH scss conversion to css Development purpose
gulp.task('watch', async function () {
    gulp.watch('src/sass/*.scss', gulp.series('scss'))

});

// ............COMMAND to compile & build........
// Development: gulp watch OR gulp run
// Development: (npm script for sass to css)-> npm run sass
// Production: gulp build
// to push in gh-pages: npm run deplay