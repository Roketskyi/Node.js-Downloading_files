// Library -----------------------
require("pidcrypt/seedrandom")  
var pidCrypt = require("pidcrypt")

require("pidcrypt/aes_cbc")
var aes = new pidCrypt.AES.CBC();

const fs = require('fs');
// -------------------------------



function readFile(filePath) {    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            var cryptt = aes.encryptText(data)

            var decrypted = aes.decryptText(cryptt);
            console.log(`Текстовий документ містить: "${decrypted}"`)
        }
  });
}

function createFile(filePath, fileContent) {

    fs.writeFile(filePath, fileContent, () => {
        console.log(`Текст в файлі "${filePath}" був зашифрований: "${fileContent}"`)
    });
}

readFile('new.txt'); // reading a file
createFile('new.txt', cryptt); // Creating a text document
