// Question 3
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');


if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}


process.chdir(logsDir);


for (let i = 0; i < 10; i++) {
  const fileName = `log${i + 1}.txt`;
  fs.writeFile(fileName, `This is log file #${i + 1}`, (err) => {
    if (err) {
      console.error('Error writing file:', fileName, err);
    } else {
      console.log(fileName);
    }
  });
}





