const fs = require("fs");
const https = require('https');

const fileUrl = 'https://z2.fm/download/40439534';
const filePath = "C:\\Node.js-task_for_crypt-part-1-main\\BestMusic.mp3";

https.get(fileUrl, res => {
    const file = fs.createWriteStream(filePath);
    let downloadedBytes = 0;
  
    res.on('data', chunk => {
      downloadedBytes += chunk.length;
      console.log(`Downloaded ${downloadedBytes} bytes`);
    });
  
    res.pipe(file);
  
    file.on('finish', () => {
      console.log('Download complete');
      file.close();
  
      const stats = fs.statSync(filePath);
      const fileSizeInBytes = stats.size;
      console.log(`File size: ${fileSizeInBytes} bytes`);
    });
  });