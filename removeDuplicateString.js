// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "tmpStorage.txt";
// let filename = "wordsOrigin.txt";
// let filename = "tmpStorage.txt";
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
}

const set = new Set(arr);

set.forEach(s => {
    console.log(s);
})
