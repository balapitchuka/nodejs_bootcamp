const fs = require('fs');

const hello = 'Hello World!!';
console.log(hello);

try {
  // blocking , synchronous way of reading, writing
  console.log('--- blocking');
  const fileStrIn = fs.readFileSync('./text_files/cricket.txt', 'utf-8');
  console.log('file read successfully\n');
  console.log(fileStrIn);
  const fileStrOut = `Nodejs is now use by many companies for backend in production.\n${fileStrIn}Created on ${Date.now()}`;

  fs.writeFileSync('./text_files/output.txt', fileStrOut);
  console.log('\nfile written successfully!!');
} catch (err) {
  console.log(`error occured : ${err}`);
}

// non-blocking, asynchronous way of reading and writing
console.log('\n--- non-blocking way');
fs.readFile('./text_files/cricket.txt', 'utf-8', (err, data) => {
  console.log(data);
});

console.log(' will read file\n');
