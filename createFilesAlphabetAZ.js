// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

let fileA = fs.createWriteStream("A.txt");
let fileB = fs.createWriteStream("B.txt");
let fileC = fs.createWriteStream("C.txt");
let fileD = fs.createWriteStream("D.txt");
let fileE = fs.createWriteStream("E.txt");
let fileF = fs.createWriteStream("F.txt");
let fileG = fs.createWriteStream("G.txt");
let fileH = fs.createWriteStream("H.txt");
let fileI = fs.createWriteStream("I.txt");
let fileJ = fs.createWriteStream("J.txt");
let fileK = fs.createWriteStream("K.txt");
let fileL = fs.createWriteStream("L.txt");
let fileM = fs.createWriteStream("M.txt");
let fileN = fs.createWriteStream("N.txt");
let fileO = fs.createWriteStream("O.txt");
let fileP = fs.createWriteStream("P.txt");
let fileQ = fs.createWriteStream("Q.txt");
let fileR = fs.createWriteStream("R.txt");
let fileS = fs.createWriteStream("S.txt");
let fileT = fs.createWriteStream("T.txt");
let fileU = fs.createWriteStream("U.txt");
let fileV = fs.createWriteStream("V.txt");
let fileW = fs.createWriteStream("W.txt");
let fileX = fs.createWriteStream("X.txt");
let fileY = fs.createWriteStream("Y.txt");
let fileZ = fs.createWriteStream("Z.txt");

let filename1 = "wordsCollected.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename1);

for (let i = 0; i < 10; i++) {
    if (arr[i].charAt(0).toLowerCase() === "a") {
        console.log(i + ".\t" + arr[i]);
        fileA.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "b") {
        console.log(i + ".\t" + arr[i]);
        fileB.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "f") {
        console.log(i + ".\t" + arr[i]);
        fileF.write(arr[i] + ";\n");
    }
}