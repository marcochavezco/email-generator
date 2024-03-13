const fs = require('fs');
const { convert } = require('html-to-text');

// Recursive function to get files
function getFiles(dir, files = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by contatenatin the passed and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recurisively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
}

async function run() {
  console.log('hello world!');
  const filesInTheFolder = getFiles('react-email-starter/out');
  console.log(filesInTheFolder);

  filesInTheFolder.map((file) => {
    fs.readFileSync(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('FILE', file, data);
    });
  });
}

run();
