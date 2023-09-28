// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

let fileA = fs.createWriteStream("(A) ENGLISH COMMON WORDS 10K.txt");
let fileB = fs.createWriteStream("(B) ENGLISH COMMON WORDS 10K.txt");
let fileC = fs.createWriteStream("(C) ENGLISH COMMON WORDS 10K.txt");
let fileD = fs.createWriteStream("(D) ENGLISH COMMON WORDS 10K.txt");
let fileE = fs.createWriteStream("(E) ENGLISH COMMON WORDS 10K.txt");
let fileF = fs.createWriteStream("(F) ENGLISH COMMON WORDS 10K.txt");
let fileG = fs.createWriteStream("(G) ENGLISH COMMON WORDS 10K.txt");
let fileH = fs.createWriteStream("(H) ENGLISH COMMON WORDS 10K.txt");
let fileI = fs.createWriteStream("(I) ENGLISH COMMON WORDS 10K.txt");
let fileJ = fs.createWriteStream("(J) ENGLISH COMMON WORDS 10K.txt");
let fileK = fs.createWriteStream("(K) ENGLISH COMMON WORDS 10K.txt");
let fileL = fs.createWriteStream("(L) ENGLISH COMMON WORDS 10K.txt");
let fileM = fs.createWriteStream("(M) ENGLISH COMMON WORDS 10K.txt");
let fileN = fs.createWriteStream("(N) ENGLISH COMMON WORDS 10K.txt");
let fileO = fs.createWriteStream("(O) ENGLISH COMMON WORDS 10K.txt");
let fileP = fs.createWriteStream("(P) ENGLISH COMMON WORDS 10K.txt");
let fileQ = fs.createWriteStream("(Q) ENGLISH COMMON WORDS 10K.txt");
let fileR = fs.createWriteStream("(R) ENGLISH COMMON WORDS 10K.txt");
let fileS = fs.createWriteStream("(S) ENGLISH COMMON WORDS 10K.txt");
let fileT = fs.createWriteStream("(T) ENGLISH COMMON WORDS 10K.txt");
let fileU = fs.createWriteStream("(U) ENGLISH COMMON WORDS 10K.txt");
let fileV = fs.createWriteStream("(V) ENGLISH COMMON WORDS 10K.txt");
let fileW = fs.createWriteStream("(W) ENGLISH COMMON WORDS 10K.txt");
let fileX = fs.createWriteStream("(X) ENGLISH COMMON WORDS 10K.txt");
let fileY = fs.createWriteStream("(Y) ENGLISH COMMON WORDS 10K.txt");
let fileZ = fs.createWriteStream("(Z) ENGLISH COMMON WORDS 10K.txt");

let filename1 = "wordsCollected.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename1);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0).toLowerCase() === "a") {
        console.log(i + ". " + arr[i]);
        fileA.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "b") {
        console.log(i + ". " + arr[i]);
        fileB.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "c") {
        console.log(i + ". " + arr[i]);
        fileC.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "d") {
        console.log(i + ". " + arr[i]);
        fileD.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "e") {
        console.log(i + ". " + arr[i]);
        fileE.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "f") {
        console.log(i + ". " + arr[i]);
        fileF.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "g") {
        console.log(i + ". " + arr[i]);
        fileG.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "h") {
        console.log(i + ". " + arr[i]);
        fileH.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "i") {
        console.log(i + ". " + arr[i]);
        fileI.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "j") {
        console.log(i + ". " + arr[i]);
        fileJ.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "k") {
        console.log(i + ". " + arr[i]);
        fileK.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "l") {
        console.log(i + ". " + arr[i]);
        fileL.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "m") {
        console.log(i + ". " + arr[i]);
        fileM.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "n") {
        console.log(i + ". " + arr[i]);
        fileN.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "o") {
        console.log(i + ". " + arr[i]);
        fileO.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "p") {
        console.log(i + ". " + arr[i]);
        fileP.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "q") {
        console.log(i + ". " + arr[i]);
        fileQ.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "r") {
        console.log(i + ". " + arr[i]);
        fileR.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "s") {
        console.log(i + ". " + arr[i]);
        fileS.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "t") {
        console.log(i + ". " + arr[i]);
        fileT.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "u") {
        console.log(i + ". " + arr[i]);
        fileU.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "v") {
        console.log(i + ". " + arr[i]);
        fileV.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "w") {
        console.log(i + ". " + arr[i]);
        fileW.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "x") {
        console.log(i + ". " + arr[i]);
        fileX.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "y") {
        console.log(i + ". " + arr[i]);
        fileY.write(arr[i] + ";\n");
    }
    if (arr[i].charAt(0).toLowerCase() === "z") {
        console.log(i + ". " + arr[i]);
        fileZ.write(arr[i] + ";\n");
    }
}