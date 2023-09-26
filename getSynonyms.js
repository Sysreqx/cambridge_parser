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


// RETURNS A PROMISE THAT RESOLVES AFTER "MS" MILLISECONDS
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() { // WE NEED TO WRAP THE LOOP INTO AN ASYNC FUNCTION FOR THIS TO WORK
    for (let i = 0; i < arr.length; i++) {

        let synonyms = "";
        let definitions = "";
        try {
            axios.get(`https://www.thesaurus.com/browse/${arr[i]}`).then(html => {
                const $ = cheerio.load(html.data);

                // document.querySelector("#root > div > main > div.HjmF_6uYqSRDdE7yX2Wy.ytunuYhmdZru4dW63UJL > section > section.wjLcgFJpqs9M6QJsPf5v > section.q7ELwPUtygkuxUXXOE9t.ULFYcLlui2SL1DTZuWLn > ul > li:nth-child(1) > a")

                $(".q7ELwPUtygkuxUXXOE9t > ul > li > a").each((i, el) => {
                    synonyms += `${$(el).text()}; `;
                })
                // 3 synonyms
                let index = synonyms.indexOf(";");
                index = synonyms.indexOf(";", index + 1);
                index = synonyms.indexOf(";", index + 1);
                // 3 synonyms

                console.log(arr[i] + ` --synonyms-- ` + synonyms.substring(0, index) + ";");
            }).catch(function(e) {

                console.log('Not fired due to the catch');
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
