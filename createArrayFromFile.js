const {readFileSync} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);


    return arr;
}

let arr = syncReadFile('tmpStorage.txt');

for (let i = 0; i < arr.length; i++) {
    console.log("\"" + arr[i] + "\"");
}   