const { readFile, writeFile } = require('fs');
 // Import 'readFile' and 'writeFile' from the 'fs' module
console.log("start")
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', (err, result) => { // Fix parentheses position
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, 'utf8', (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Write operation completed successfully.');
    });
  });
});
console.log('starting next task')

