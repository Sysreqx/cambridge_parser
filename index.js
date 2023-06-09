const axios = require("axios");
const cheerio = require("cheerio");

// READ ARRAY FROM FILE
const {readFileSync} = require('fs');
const fs = require("fs");

let file = fs.createWriteStream('wordsWithDefinition.txt');

let filename = "words.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);
// let outputSet = [];


// RETURNS A PROMISE THAT RESOLVES AFTER "MS" MILLISECONDS
const timer = ms => new Promise(res => setTimeout(res, ms))


async function load() { // WE NEED TO WRAP THE LOOP INTO AN ASYNC FUNCTION FOR THIS TO WORK
    for (let i = 0; i < arr.length; i++) {

        try {
            axios.get(`https://dictionary.cambridge.org/dictionary/english/${arr[i]}`).then(html => {
                const $ = cheerio.load(html.data);
                let text = ""
                $("div.ddef_h > div").each((i, el) => {
                    text += `${$(el).text()}\n`;
                })
                console.log(i + ".\t" + arr[i] + ` --definition-- ` + text.substring(0, text.indexOf('\n')));
                file.write(arr[i] + ` --definition-- ` + text.substring(0, text.indexOf('\n')) + "\n");
            }).catch(function(e) {

                console.log(i + ".\t" + arr[i] + ' Not fired due to the catch');
                file.write(arr[i] + ' Not fired due to the catch\n');

            }).then(function(){
                i++;
            }, function () {
                console.log(i + ".\t" + arr[i] + ' Not fired due to the catch');
                file.write(arr[i] + ' Not fired due to the catch\n');
            });
        } catch (error) {
            continue;
        }

        await timer(10); // THEN THE CREATED PROMISE CAN BE AWAITED
    }

}

load().then();



