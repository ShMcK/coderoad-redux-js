const { accessSync, F_OK } = require('fs');

function exists(path, silent = true) {
  try {
    accessSync(path, F_OK);
  } catch (e) {
    if (e) {
      if (!silent) {
        console.log(e);
      }
      return false;
    }
  }
  return true;
}

console.log(exists('dist'));
