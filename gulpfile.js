var { src, dest, parallel } = require('gulp');

function buildPages() {
  return src('src/pages/*.html')
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/*.css')
    .pipe(dest('build/styles/'));
}

function buildScripts() {
  return src('src/scripts/**/*.js')
    .pipe(dest('build/scripts/'));
}

function buildAssets() {
  return src('src/assets/**/*.*')
    .pipe(dest('build/assets/'));
}

// Указываем функции, которые будут доступны из терминала
// Команда «по умолчанию» -- default -- будет срабатывать при вызове gulp без аргументов
exports.default = parallel(buildPages, buildStyles, buildScripts, buildAssets);

