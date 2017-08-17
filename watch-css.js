const shell = require('shelljs');
const exit = require('exit-hook');
const chokidar = require('chokidar');
const watcher = chokidar.watch(['./data/trolls.json'], {
  ignored: /[\/\\]\./,
  ignoreInitial: true,
});

watcher.on('all', () => {
  shell.exec('npm run build:css');
});

exit(() => {
  console.log('♻  cleaning up...');
  watcher.close();
});
