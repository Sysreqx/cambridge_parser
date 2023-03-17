// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "tmpStorage.txt";
let filename2 = "wordsOrigin.txt";
// let filename = "wordsOrigin.txt";
// let filename = "tmpStorage.txt";
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}


// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 4];
let arr1 = syncReadFile(filename);
let arr2 = syncReadFile(filename2);


for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].substring(0, arr1[i].indexOf(' --definition--'));
}

const unique = arr2.filter(f => !arr1.includes(f));

unique.forEach(s => {
    console.log(s);
})
