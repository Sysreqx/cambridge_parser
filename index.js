const axios = require("axios");
const cheerio = require("cheerio");

// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "words.txt";
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);

// CHUNK ARRAY TO PIECES, PARSER CANNOT HANDLE FULL ARRAY
let size = 1; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
for (let i = 0; i < Math.ceil(arr.length/size); i++){
    subarray[i] = arr.slice((i*size), (i*size) + size);
}


// RETURNS A PROMISE THAT RESOLVES AFTER "MS" MILLISECONDS
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // WE NEED TO WRAP THE LOOP INTO AN ASYNC FUNCTION FOR THIS TO WORK
    for (let i = 0; i < subarray.length; i++) {
        // code here
        // console.log(subarray[i]);
        // console.log(`${i}. \t end\n\n `);

        for (let j = 0; j < subarray[i].length; j++) {
            // word = arr[j];

            // =TEXTJOIN(";";TRUE;IMPORTXML("https://www.thesaurus.com/browse/"&A4944;"//*[@id='meanings']/div[2]/ul/li[position()<4]/a/text()"))
            // =TEXTJOIN(";";TRUE;IMPORTXML("http://dictionary.cambridge.org/dictionary/english/"&A6;"//div[contains(@class,'ddef_d')]"))
            axios.get(`https://dictionary.cambridge.org/dictionary/english/${subarray[i][j]}`).then(html => {
                const $ = cheerio.load(html.data);
                let text = ""
                $("div.ddef_h > div").each((i, elem) => {
                    text += `${$(elem).text()}\n`;
                })
                console.log(subarray[i][j] + "\t--definition--\t " + text.substring(0, text.indexOf('\n')));
            })
        }
        // code here end


        await timer(10); // THEN THE CREATED PROMISE CAN BE AWAITED
    }
}

load();



// for (let j = 0; j < arr.length; j++) {
//     // word = arr[j];
//
//     // =TEXTJOIN(";";ИСТИНА;IMPORTXML("https://www.thesaurus.com/browse/"&A4944;"//*[@id='meanings']/div[2]/ul/li[position()<4]/a/text()"))
//     // =TEXTJOIN(";";ИСТИНА;IMPORTXML("http://dictionary.cambridge.org/dictionary/english/"&A6;"//div[contains(@class,'ddef_d')]"))
//     axios.get(`https://dictionary.cambridge.org/dictionary/english/${arr[j]}`).then(html => {
//         const $ = cheerio.load(html.data);
//         let text = ""
//         $("div.ddef_h > div").each((i, elem) => {
//             text += `${$(elem).text()}\n`;
//         })
//         console.log(arr[j] + "\t--definition--\t " + text.substring(0, text.indexOf('\n')));
//     })
// }

