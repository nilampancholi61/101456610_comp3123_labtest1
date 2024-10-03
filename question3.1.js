// removing


const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');


if (fs.existsSync(logsDir)) {
  fs.readdir(logsDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(logsDir, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting file:', file, err);
        } else {
          console.log('Deleted file:', file);
        }
      });
    });

   
    fs.rmdir(logsDir, (err) => {
      if (err) {
        console.error('Error deleting Logs directory:', err);
      } else {
        console.log('Logs directory deleted');
      }
    });
  });
} else {
  console.log('Logs directory does not exist');
}
