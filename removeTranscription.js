// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "wordsTest.txt";

let wordsOnly = [];
let wordsTranslation =[];
let wordsWithTranslation =[];

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);

function getWordsOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0).match(/^[a-zA-Z]*$/)) {
            // console.log(arr[i]);

            wordsOnly.push(arr[i]);
        }
    }
}

function getOnlyTranslation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0).match(/[А-Я]/i)) {
            // console.log(arr[i]);

            wordsTranslation.push(arr[i]);
        }
    }
}

getWordsOnly(arr);
getOnlyTranslation(arr);

wordsOnly.forEach((e) => console.log(e));
console.log("/////////");
console.log("/////////");
console.log("/////////");
wordsTranslation.forEach((e) => console.log(e));
