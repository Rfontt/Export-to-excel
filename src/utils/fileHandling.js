import fs from 'fs';
import path from 'path';

function listAndRemoveFiles() {
  const directory = path.resolve('src', 'archives');

  fs.readdir(directory, (error, files) => {
    for (const file of files) {
      fs.unlink(path.join(directory, file), error => {
        if(error) {
          throw error;
        } else {
          return true;
        }
      });
    }
  });
}

export { listAndRemoveFiles };