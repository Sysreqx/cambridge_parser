// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

// let filename = "wordsTest.txt";
let filename = "words.txt";

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

function getWords(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0).match(/^[a-zA-Z]*$/)) {
            wordsOnly.push(arr[i]);
            wordsTranslation.push(arr[i + 1]);
            wordsWithTranslation.push(`${arr[i]} - %%%${arr[i + 1]}`);
        }
    }
}

getWords(arr);

// wordsWithTranslation.forEach((e) => console.log(e));

// write to file
let fs = require('fs');

let fileWordsWithTranslation = fs.createWriteStream('wordsWithTranslation.txt');
fileWordsWithTranslation.on('error', function(err) {
    console.log("createWriteStream error occurred (fileWordsWithTranslation.txt)") });
wordsWithTranslation.forEach((e) => fileWordsWithTranslation.write(`${e}\n`));
fileWordsWithTranslation.end();

let fileWordsOnly = fs.createWriteStream('wordsOnly.txt');
fileWordsOnly.on('error', function(err) {
    console.log("createWriteStream error occurred (fileWordsOnly.txt)") });
wordsOnly.forEach((e) => fileWordsOnly.write(`${e}\n`));
fileWordsOnly.end();