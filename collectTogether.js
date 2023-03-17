const axios = require("axios");
const cheerio = require("cheerio");

// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

let file = fs.createWriteStream('wordsCollected.txt');

let filename1 = "wordsWithDefinition.txt";
let filename2 = "synonyms";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr1 = syncReadFile(filename1);
let arr2 = syncReadFile(filename2);

for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].substring(0, arr1[i].indexOf(' --definition--')) === arr2[j].substring(0, arr2[j].indexOf(' --synonyms--'))) {
            console.log(i + ".\t" + arr1[i] + ";" + arr2[j].substring(arr2[j].indexOf(' --synonyms--')));
            file.write(arr1[i] + ";" + arr2[j].substring(arr2[j].indexOf(' --synonyms--')) + "\n");
            flag = false;
        }
    }

    if (flag) {
        console.log(i + ".\t" + arr1[i])
        file.write(arr1[i] + ";\n");
    }
}