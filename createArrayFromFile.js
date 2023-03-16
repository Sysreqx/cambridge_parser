// const {promises: fsPromises} = require('fs');
//
// function asyncReadFile(filename) {
//     return fsPromises
//         .readFile(filename, 'utf-8')
//         .then(contents => {
//             const arr = contents.split(/\r?\n/);
//
//             // console.log(arr);
//
//             return arr;
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
//
// // arr = await asyncReadFile('words.txt');
//
// export {asyncReadFile};


const {readFileSync} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);


    return arr;
}

let arr = syncReadFile('words.txt');

for (let i = 0; i < arr.length; i++) {
    console.log("\"" + arr[i] + "\"");
}