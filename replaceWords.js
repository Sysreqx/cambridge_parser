// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

// let file = fs.createWriteStream('wordsCollected.txt');

let filename = "wordsWithDefinitions.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);
let arr1 = [];

function removeNextOccurrences(arr) {
    for (let i = 0; i < arr.length; i++) {
        // pull a word from a string
        const wordToRemove = arr[i].substring(0, arr[i].indexOf(" --definitions--"));

        // blur the word with "*****"
        console.log(arr[i].slice(0, 1) + arr[i].slice(1).replaceAll(wordToRemove, 'XXXXX'));
        arr1.push(arr[i].slice(0, 1) + arr[i].slice(1).replaceAll(wordToRemove, 'XXXXX'));
    }
}

removeNextOccurrences(arr);

// write to file
let writeToFile = fs.createWriteStream(`${filename}`);
writeToFile.on('error', function(err) {
    console.log(`createWriteStream error occurred (${filename})`)
});
arr1.forEach((e) => writeToFile.write(`${e}\n`));
writeToFile.end();
