// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

let filename1 = "wordsWithTranslation.txt";
let filename2 = "wordsCollected.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr1 = syncReadFile(filename1);
let arr2 = syncReadFile(filename2);

let file = fs.createWriteStream('wordsCollected.txt');

for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].substring(0, arr1[i].indexOf(' - %%%')) === arr2[j].substring(0, arr2[j].indexOf(' --definitions--'))) {
            console.log(i + ".\t" + arr1[i] + "; (" + arr2[j].substring(arr2[j].indexOf(' --definitions--')));
            file.write(arr1[i] + "; (" + arr2[j].substring(arr2[j].indexOf(' --definitions--') + 16) + ")\n");
            flag = false;
        }
    }

    if (flag) {
        console.log(i + ".\t" + arr1[i])
        file.write(arr1[i] + ";\n");
    }
}