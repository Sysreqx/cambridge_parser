const axios = require("axios");
const cheerio = require("cheerio");

// READ ARRAY FROM FILE
const {readFileSync} = require('fs');

let filename = "wordsOnly.txt";

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

let arr = syncReadFile(filename);

// write to file
let fs = require('fs');

let fileWordsWithDefinitions = fs.createWriteStream('wordsWithDefinitions.txt');

let cnt = 1;

// RETURNS A PROMISE THAT RESOLVES AFTER "MS" MILLISECONDS
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() { // WE NEED TO WRAP THE LOOP INTO AN ASYNC FUNCTION FOR THIS TO WORK
    for (let i = 0; i < arr.length; i++) {

        let definitions = "";
        try {
            axios.get(`https://www.dictionary.com/browse/${arr[i]}`).then(html => {
                const $ = cheerio.load(html.data);

                // document.querySelector("#root > div > main > div.HjmF_6uYqSRDdE7yX2Wy.ytunuYhmdZru4dW63UJL > section > section.wjLcgFJpqs9M6QJsPf5v > section.q7ELwPUtygkuxUXXOE9t.ULFYcLlui2SL1DTZuWLn > ul > li:nth-child(1) > a")

                $("._bzA3f8_vqmJSIKsgOar > ol > li > .ESah86zaufmd2_YPdZtq").each((i, el) => {
                    definitions += `${$(el).text()}; `;
                })

                // 3 definitions
                let index = definitions.indexOf(";");
                index = definitions.indexOf(";", index + 1);
                index = definitions.indexOf(";", index + 1);
                // 3 definitions

                console.log(cnt + ". " + arr[i] + ` --definitions-- ` + definitions.substring(0, index) + ";");

                // console.log(arr[i] + ` --definitions-- ` + definitions.substring(0, index) + ";");
                fileWordsWithDefinitions.write(arr[i] + ` --definitions-- ` + definitions.substring(0, index) + ";\n");

                cnt++;
            }).catch(function(e) {

                // console.log('Not fired due to the catch ' + arr[i]);
                fileWordsWithDefinitions.write(arr[i] + ` --definitions-- NO DEFINITION` + ";\n");
                cnt++;
            }).then(function(){
                i++;
            }, function () {

                console.log('Not fired due to the catch');
            });
        } catch (error) {
            continue;
        }


        await timer(10); // THEN THE CREATED PROMISE CAN BE AWAITED
    }
}

load().then();
