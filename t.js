const fs = require("fs");
const https = require('https');

const fileUrl = 'https://z2.fm/download/40439534';
const filePath = "C:\\Node.js-task_for_crypt-part-1-main\\BestMusic.mp3";

https.get(fileUrl, (res) => {
    try {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
    
        file.on ('finish', () => {
            console.log('Download complete');
            file.close();
        });
    } catch (err) {
        console.error(err);
    }
})