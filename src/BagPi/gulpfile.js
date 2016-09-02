/// <binding ProjectOpened='default' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var path = require('path');

var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',            
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));    
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "scripts/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('less', function () {
    return gulp.src('scripts/**/*.less')
    .pipe(plumber())
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./wwwroot/views'))
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts', 'less'], function () {
    return gulp.watch(['scripts/**/*.ts', 'scripts/**/*.less'], ['ts', 'less']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);