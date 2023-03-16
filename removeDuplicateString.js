// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "wordsOrigin.txt";
// let filename = "wordsOrigin.txt";
// let filename = "s";
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);

const set = new Set(arr);

set.forEach(s => {
    console.log(s);
})

