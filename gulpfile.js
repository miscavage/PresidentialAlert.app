//Modules
const gulp = require('gulp');
const fs = require('fs');

/**
 * @description - Get files from directory
 * @param {String} dir - Directory
 * @param {String} fileType - File type to filter
 * @param {Array} fileArray - File array (recursive)
 * @return {Array} fileArray
 */
let getFiles = (dir, fileType, fileArray) => {
    //Get or create fileArray
    fileArray = fileArray || [];
    //Read directory
    let files = fs.readdirSync(dir);

    //Cycle files
    for (let i in files) {
        let file = files[i];

        //Must be string
        if (typeof file === 'string' || file instanceof String) {

            //Get file name
            let name = dir + '/' + files[i];
            name = name.toString();

            //Check if is folder or not
            if (isFolder(name)) {
                //Recursive file array loop until we're done
                getFiles(name, fileType, fileArray);
            }
            else {
                //Not a folder, check extension, if matches, push to file array
                if (getExtension(name) == `.${fileType}`) fileArray.push(name);
            }
        }
    };

    //Return now
    return fileArray;
};

/**
 * @description - Is path a folder
 * @param  {String} filePath - Path to check
 * @return {Boolean} isFolder
 */
let isFolder = (filePath) => {
    try {
        return fs.statSync(filePath).isDirectory();
    } catch (err) {
        return false;
    }
};

/**
 * @description - Get extension
 * @param  {String} filename - File name
 * @return {String} extension
 */
let getExtension = (filename='') => {
    let i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
};

//

/**
 * @description - Create gulp task 'styles'
 */
gulp.task('styles', function () {
    //Modules
    const scss = require('gulp-sass');
    const cleanCSS = require('gulp-clean-css');
    const sourcemaps = require('gulp-sourcemaps');
    const watch = require('gulp-watch');
    const concat = require('gulp-concat');
    const gulpif = require('gulp-if');
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');

    //Get all scss files in the project, first from ./assets
    let files = getFiles('./assets', 'scss');
    //Then concat all scss files in the project from ./components
    files = files.concat(getFiles('./components', 'scss'));

    /**
     * @description - Run gulp for styles
     */
    const run = () => {
        return new Promise((resolve, reject) => {
            gulp
                .src(files)
                .pipe(
                    gulpif(
                        process.env.ENVIRONMENT === 'dev',
                        sourcemaps.init({ loadMaps: true })
                    )
                )
                .pipe(scss())
                .pipe(concat('styles.min.css'))
                .pipe(postcss([autoprefixer()]))
                .pipe(cleanCSS())
                .pipe(
                    gulpif(
                        process.env.ENVIRONMENT === 'dev',
                        sourcemaps.write('.')
                    )
                )
                .pipe(gulp.dest(`static/styles`))
                .on('error', err => {
                    reject(err);
                }).on('end', () => {
                    resolve();
                });
        });
    };

    //Watch for any changes
    if (process.env.ENVIRONMENT === 'dev') {
        watch(files, () => run());
    }

    //Return run
    return run();
});

/**
 * @description - Create gulp task 'fonts'
 */
gulp.task('fonts', () => {
    return new Promise((resolve, reject) => {
        gulp
            .src(['assets/fonts/**/**'])
            .pipe(gulp.dest(`static/fonts`))
            .on('error', err => {
                reject(err);
            }).on('end', () => {
                resolve();
            });
    });
});

/**
 * @description - Create gulp task 'images'
 */
gulp.task('images', () => {
    return new Promise((resolve, reject) => {
        gulp
            .src(['assets/images/**/**'])
            .pipe(gulp.dest(`static/images`))
            .on('error', err => {
                reject(err);
            }).on('end', () => {
                resolve();
            });
    });
});

/**
 * @description - Create gulp task 'build' to combine ('images', 'fonts', 'styles')
 */
gulp.task('build', gulp.series('images', 'fonts', 'styles'));
